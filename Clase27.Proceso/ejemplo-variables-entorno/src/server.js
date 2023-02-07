import express from "express";
import config from "./config/config.js";

const app = express();

console.log(`NODE_ENV: ${config.env}`);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(config.port, () => {
  console.log(`Server listening http://${config.host}:${config.port}`);
});
