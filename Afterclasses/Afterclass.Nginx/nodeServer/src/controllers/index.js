import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getLogin = (req, res) => {
  if (req.isAuthenticated()) {
    const user = req.user;
    console.log(user);
    return res.render("login-ok", {
      usuario: user.username,
      nombre: user.firstname,
      apellido: user.lastname,
      email: user.email,
    });
  }

  res.sendFile(join(__dirname, "../views/login.html"));
};

const getRegister = (req, res) => {
  if (req.isAuthenticated()) {
    const user = req.session.user;

    return res.render("login-ok", {
      usuario: user.username,
      nombre: user.firstname,
      apellido: user.lastname,
      email: user.email,
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

export const authController = {
  getLogin,
  getRegister,
  getLoginFailiure,
  getRegisterFailiure,
  logOut,
};
