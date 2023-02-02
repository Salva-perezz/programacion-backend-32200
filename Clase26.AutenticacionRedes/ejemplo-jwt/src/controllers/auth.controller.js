import jwt from "jsonwebtoken";
import tokensBlacklist from "../utils/blacklist.js";

const users = [
  {
    username: "salva",
    password: "salvax",
    email: "salva@mail.com",
  },
];

const generateToken = (user) => {
  const token = jwt.sign(
    { data: { username: user.username, email: user.email } },
    "SALVAAA",
    { expiresIn: "30m" }
  );

  return token;
};

const login = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) return res.json({ error: true, data: "Invalid credentials" });

  const authToken = generateToken(user);

  res.json({ error: false, data: authToken });
};

const register = (req, res) => {
  const { username } = req.body;
  const user = users.find((user) => user.username === username);

  if (user) return res.json({ error: true, data: "Username already in use" });

  users.push(req.body);

  res.json({ error: false, data: req.body });
};

const logout = (req, res) => {
  tokensBlacklist.push(req.token);

  res.json({ error: false, data: "Bye Bye" });
};

export const authController = { login, register, logout };
