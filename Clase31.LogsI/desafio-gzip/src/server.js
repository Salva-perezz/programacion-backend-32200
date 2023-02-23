import compression from "compression";
import express from "express";

const app = express();
const response = "Hola que tal".repeat(1000);

app.get("/saludo", (req, res) => {
  res.send(response);
});

app.get("/saludozip", compression(), (req, res) => {
  res.send(response);
});

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
