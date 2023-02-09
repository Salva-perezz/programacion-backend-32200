import { fork } from "child_process";
import express from "express";

const app = express();

const sumar = () => {
  let suma = 0;
  for (let i = 0; i < 9e9; i++) {
    suma += i;
  }

  return suma;
};

app.get("/calculo-bloq", (req, res) => {
  const suma = sumar();

  res.send(`Sumabloq: ${suma}`);
});

app.get("/calculo-nobloq", (req, res) => {
  const child = fork("child.js");

  child.send("arranca");

  child.on("message", (msg) => {
    console.log("Contesto padre");
    res.send(`Sumabloq: ${msg}`);
  });
});

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
