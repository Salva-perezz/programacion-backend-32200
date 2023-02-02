import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const serverLogin = (req, res) => {
  res.sendFile(join(__dirname, "../../views/login.html"));
};

const failLogin = (req, res) => {
  res.render("login-error", {});
};

const logout = (req, res) => {
  req.logout();

  res.redirect("/login");
};

export const authController = { serverLogin, failLogin, logout };
