import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import router from "./routes/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use("/", router);

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
