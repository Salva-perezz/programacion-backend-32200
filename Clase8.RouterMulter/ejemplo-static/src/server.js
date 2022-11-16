import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use("/static", express.static(__dirname + "/public"));

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
