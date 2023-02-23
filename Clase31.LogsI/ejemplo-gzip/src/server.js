import compression from "compression";
import express from "express";
import config from "./config/config.js";

const app = express();

console.log("ENV:", config.env);

app.get("/compressed", compression(), (req, res) => {
  try {
    const response = "Hola".repeat(10000);
    res.send(response.pepe.hola);
  } catch (err) {
    console.error("Error:", err.message);

    res.status(500).send("Server error");
  }
});

app.get("/un-compressed", (req, res) => {
  const response = "Hola".repeat(10000);

  res.send(response);
});

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
