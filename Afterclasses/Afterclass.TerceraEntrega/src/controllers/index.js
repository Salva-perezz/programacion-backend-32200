import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import args from "../yargs.js";
import { fork } from "child_process";
import sendMail from "../nodemail.js";

const getLoginMail = (req, res) => {

    if (req.isAuthenticated()) {
        const user = req.user;
        sendMail(
            user.username,
            user.firstname,
            user.lastname,
            user.email,
            user.phone,
            user.address,
            user.age,
        )
        return res.render("login-ok", {
            usuario: user.username,
            nombre: user.firstname,
            apellido: user.lastname,
            email: user.email,
            tel: user.phone,
            direccion: user.address,
            edad: user.age,
            imagen: user.photo
        });
    }

    res.sendFile(join(__dirname, "../views/login.html"));
};

const getLogin = (req, res) => {

    if (req.isAuthenticated()) {
        const user = req.user;
        return res.render("login-ok", {
            usuario: user.username,
            nombre: user.firstname,
            apellido: user.lastname,
            email: user.email,
            tel: user.phone,
            direccion: user.address,
            edad: user.age,
            imagen: user.photo
        });
    }

    res.sendFile(join(__dirname, "../views/login.html"));
};

const getRegister = (req, res) => {
    if (req.isAuthenticated()) {
        const user = req.session.user;
        const image = req.file.filename;
        res.locals.image = `${image}`;
        return res.render("login-ok", {
            usuario: user.username,
            nombre: user.firstname,
            apellido: user.lastname,
            email: user.email,
            tel: user.phone,
            direccion: user.address,
            edad: user.age,
            imagen: res.locals.image
        });
    }

    res.sendFile(join(__dirname, "../views/signup.html"));
};

const getLoginFailiure = (req, res) => {
    res.render("login-error");
};

const getRegisterFailiure = (req, res) => {
    res.render("signup-error");
};

const logOut = (req, res) => {
    req.logout(() => {
        return res.redirect("/login");
    });
};

const info = (req, res) => {

    res.render("info", {
        entryArgs: JSON.stringify(args),
        platform: process.platform,
        versionNode: process.version,
        memory: process.memoryUsage().rss,
        path: process.execPath,
        processId: process.pid,
        dir: process.cwd(),
    })
}

const getRandom = (req, res) => {
    const { cant } = req.query;
    const childProcess = fork("./src/child.js");
    const quantity = cant ? cant : 100000000;

    childProcess.send(quantity);

    childProcess.on("message", (response) => {
        res.json(response);
    });
}

export const authController = {
    getLogin,
    getRegister,
    getLoginFailiure,
    getRegisterFailiure,
    logOut,
    info,
    getRandom,
    getLoginMail,
};