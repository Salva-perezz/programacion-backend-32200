import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const users = [];

const serveLogin = (req, res) => {
  console.log(__dirname);
  res.sendFile(
    "/Users/salvadorperez/Desktop/Coderhouse.nosync/programacion-backend-32200/Clase25.AutenticacionAutorizacion/ejemplo-autenticacion/src/public/login.html"
  );
};

const serveRegister = (req, res) => {
  res.sendFile(path.join(__dirname), "../public/register.html");
};

const login = (req, res) => {
  const { username } = req.body;
  const user = users.find((user) => user === username);

  if (user) {
    res.redirect("/welcome");
  } else {
    res.sendStatus(401);
  }
};

const register = (req, res) => {
  const { username } = req.body;

  users.push(username);

  res.redirect("/login");
};

const serveWelcome = (req, res) => {
  res.sendFile(path.join(__dirname), "../public/welcome.html");
};

export const authController = {
  serveLogin,
  serveRegister,
  login,
  register,
  serveWelcome,
};
