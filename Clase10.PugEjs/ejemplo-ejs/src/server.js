import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import routes from "./routes/index.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use("/", routes);

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
