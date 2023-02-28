import express from "express";
import logger from "./lib/logger.js";

const app = express();

app.get("/", (req, res) => {
  try {
    logger.info("New request in route:", req.route.path);

    res.send("Welcome");
  } catch (err) {
    logger.error("Error:", err.message);
  }
});

app.listen(3000, () => {
  console.log("Serve listening port 3000");
});
