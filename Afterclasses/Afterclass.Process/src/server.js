import express, { json, urlencoded } from 'express';
import session from "express-session";
import mongoose from "mongoose";
import passport from "passport";
import { passportStrategies } from "./lib/passport.lib.js";
import invalidUrl from "./middleware/invalidUrl.middleware.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";
import router from "./routes/index.js";
import { Server as IOServer } from 'socket.io';
import moment from 'moment'
import Contenedor from './crud/Contenedor.js';
import sqliteConfig from './db/sqlite.js';
import config from './db/index.js';
import { User } from "./table/user.model.js";
import dotenv from "dotenv";

dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main.hbs',
    layoutsDir: join(__dirname, '/views/layouts'),
    partialsDir: join(__dirname, '/views/partials')
}));

app.set('view engine', 'hbs');
app.set('views', join(__dirname, '/views'));

app.use(
    session({
        secret: "coderhouse",
        rolling: true,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 600000,
        },
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
    done(null, data)
});

app.use('/', router)

app.use(invalidUrl);

await mongoose.connect("mongodb://localhost:27017/user");
console.log("Databe connected!");

const expressServer = app.listen('3000', () => {
    console.log("server listening port 3000");
})

const io = new IOServer(expressServer);

const productApi = new Contenedor(config, "products")
const messageApi = new Contenedor(sqliteConfig, "chat")

const time = moment().format('DD MM YYYY hh:mm:ss');

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
        await productApi.save(product)
        io.emit("server:product", await productApi.getAll());
    })
});

app.on('error', (err) => {
    console.log(err);
})

