import express from "express";
import logger from "./lib/logger.js";

const app = express();

app.get("/sumar", (req, res) => {
  const { n1, n2 } = req.query;
  if (!isNaN(n1) && !isNaN(n2)) {
    logger.info(`Parámetros ${n1} y ${n2} correctos para la suma`);
    res.send(`La suma de ${n1} más ${n2} es ${Number(n1) + Number(n2)}`);
  } else {
    logger.error("Parámetros incorrectos para la suma");
    res.send("Parámetros de entrada no válidos");
  }
});

app.get("*", (req, res) => {
  const { url, method } = req;
  logger.warn(`Ruta ${method} ${url} no implementada`);
  res.send(`Ruta ${method} ${url} no está implementada`);
});

const server = app.listen(3000, () => {
  logger.info(`Servidor express escuchando en el puerto 3000`);
});
server.on("error", (error) => logger.fatal(`Error en servidor: ${error}`));