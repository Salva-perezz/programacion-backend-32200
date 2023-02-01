import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const users = [];

const serverLogin = (req, res) => {
  res.sendFile(join(__dirname, "../public/login.html"));
};

const serverRegister = (req, res) => {
  res.sendFile(join(__dirname, "../public/register.html"));
};

const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);

  if (!user || user.password !== password) {
    return res.status(401).json({ error: "true", data: "Invalid credentials" });
  }

  req.session.user = user;

  res.redirect("/datos");
};

const register = (req, res) => {
  const { username, email, password } = req.body;

  users.push({ username, email, password });

  res.redirect("/login");
};

const data = (req, res) => {
  const { user } = req.session;

  res.json(user);
};

export const authController = {
  serverLogin,
  serverRegister,
  login,
  register,
  data,
};
