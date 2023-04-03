import cluster from "cluster";
import dotenv from "dotenv";
import express, { json, urlencoded } from "express";
import { engine } from "express-handlebars";
import session from "express-session";
import moment from "moment";
import mongoose from "mongoose";
import os from "os";
import passport from "passport";
import { dirname, join } from "path";
import { Server as IOServer } from "socket.io";
import { fileURLToPath } from "url";
import yargs from "yargs";
import Contenedor from "./classes/Contenedor.js";
import config from "./config/config.js";
import ProductDaoFactory from "./daos/productDaoFactory.js";
import sqliteConfig from "./db/sqlite.js";
import logger from "./lib/logger.js";
import { passportStrategies } from "./lib/passport.lib.js";
import invalidUrl from "./middleware/invalidUrl.middleware.js";
import { User } from "./models/user.model.js";
import router from "./routes/index.js";

dotenv.config();

const port = config.port || 3000;
const host = config.host;

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const params = yargs(process.argv.slice(2))
  .alias({
    p: "port",
    m: "mode",
  })
  .default({
    mode: "FORK",
    port: 8080,
  }).argv;
const cpus = os.cpus();

if (cluster.isPrimary && params.mode.toUpperCase() === "CLUSTER") {
  cpus.map(() => {
    cluster.fork();
  });

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  app.use(json());

  app.use(urlencoded({ extended: true }));

  app.use(express.static("src/uploads"));

  app.engine(
    "hbs",
    engine({
      extname: ".hbs",
      defaultLayout: "main.html",
      layoutsDir: join(__dirname, "/views/layouts"),
      partialsDir: join(__dirname, "/views/partials"),
    })
  );

  app.set("view engine", "hbs");
  app.set("views", join(__dirname, "/views"));

  app.use(
    session({
      secret: "coderhouse",
      rolling: true,
      resave: false,
      saveUninitialized: false,
      /* cookie: {
                maxAge: 600000,
            }, */
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use("login", passportStrategies.loginStrategy);
  passport.use("register", passportStrategies.registerStrategy);

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser(async (id, done) => {
    const data = await User.findById(id);
    done(null, data);
  });

  app.use((req, res, next) => {
    logger.info({
      method: req.method,
      url: req.url,
    });
    next();
  });

  app.use(router);

  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database connected!");

  const expressServer = app.listen(port, (err) => {
    if (err) {
      console.log(`Error intializing server ${JSON.stringify(err)}`);
    }
    console.log(`Server listening: http://${host}:${port}`);
  });

  const io = new IOServer(expressServer);

  const productApi = ProductDaoFactory.getDao(config.db);
  const messageApi = new Contenedor(sqliteConfig, "chat");

  const time = moment().format("DD MM YYYY hh:mm:ss");

  app.use(express.static(__dirname + "/views/layouts"));

  io.on("connection", async (socket) => {
    console.log(`New connection, socket ID: ${socket.id}`);

    socket.emit("server:message", await messageApi.getAll());

    socket.emit("server:product", await productApi.getAll());

    socket.on("client:message", async (messageInfo) => {
      await messageApi.save({ ...messageInfo, time });
      io.emit("server:message", await messageApi.getAll());
    });
    socket.on("client:product", async (product) => {
      await productApi.create(product);
      io.emit("server:product", await productApi.getAll());
    });
  });

  app.use(invalidUrl);

  app.on("error", (err) => {
    console.log(err);
  });
}
