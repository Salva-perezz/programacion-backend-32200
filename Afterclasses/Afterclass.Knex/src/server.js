import express, { json, urlencoded } from "express";
import path, { dirname, join } from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";
import router from "./routes/index.js";
import { Server as IOServer } from "socket.io";
import Contenedor from "./api.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

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

app.use("/", router);

const expressServer = app.listen("3000", () => {
  console.log("server listening port 3000");
});

const io = new IOServer(expressServer);

const productApi = new Contenedor(
  {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "mibase",
    },
    pool: { min: 0, max: 7 },
  },
  "product"
);

const messageApi = new Contenedor(
  {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, "./database/coderhouse.sqlite"),
    },
    useNullAsDefault: true,
  },
  "message"
);

app.use(express.static(__dirname + "/views/layouts"));

io.on("connection", async (socket) => {
  console.log(`New connection, socket ID: ${socket.id}`);

  socket.emit("server:message", await messageApi.getAll());

  socket.emit("server:product", await productApi.getAll());

  socket.on("client:message", async (messageInfo) => {
    await messageApi.save({ ...messageInfo, time: Date.now() });
    io.emit("server:message", await messageApi.getAll());
  });

  socket.on("client:product", async (product) => {
    await productApi.save({
      title: product.title,
      price: Number(product.price),
      thumbnail: product.thumbnail,
    });
    io.emit("server:product", await productApi.getAll());
  });
});

app.on("error", (err) => {
  console.log(err);
});
