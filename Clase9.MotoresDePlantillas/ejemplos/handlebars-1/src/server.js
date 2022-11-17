import express from "express";
import routes from "./routes/index.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(join(__dirname, "/public")));

app.use("/", routes);

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
