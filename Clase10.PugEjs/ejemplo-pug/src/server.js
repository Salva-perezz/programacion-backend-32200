import express from "express";
import router from "./routes/index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.use("/", router);

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
