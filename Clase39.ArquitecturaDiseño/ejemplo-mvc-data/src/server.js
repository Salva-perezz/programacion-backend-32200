import express from "express";
import mongoose from "mongoose";
import config from "./config/config.js";
import routes from "./routes/index.js";

const app = express();

await mongoose.connect(config.dbUrl);

app.use(routes);

console.log("Database connected!");

app.listen(config.port, (err) => {
  if (err) {
    console.log(`Error intializing the server ${JSON.stringify(err)}`);
  }

  console.log(`Server listening por ${config.port}`);
});
