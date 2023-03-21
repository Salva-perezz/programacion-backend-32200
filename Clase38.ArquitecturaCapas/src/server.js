import express, { json, urlencoded } from "express";
import mongoose from "mongoose";
import config from "./config/config.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import router from "./routes/index.js";

const app = express();
const port = config.port || 3000;
const host = config.host;

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(router);

app.use(errorMiddleware);

await mongoose.connect(config.dbUrl);

console.log("Database connected!");

app.listen(port, (err) => {
  if (err) {
    console.log(`Error intializing server ${JSON.stringify(err)}`);
  }

  console.log(`Server listening: http://${host}:${port}`);
});
