import express from "express";
import mongoose from "mongoose";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import config from "./config/config.js";
import routes from "./routes/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

await mongoose.connect(config.dbUrl);

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "pug");

app.use(routes);

console.log("Database connected!");

app.listen(config.port, (err) => {
  if (err) {
    console.log(`Error intializing the server ${JSON.stringify(err)}`);
  }

  console.log(`Server listening por ${config.port}`);
});
