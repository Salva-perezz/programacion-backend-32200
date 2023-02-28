import express from "express";
import logger from "./lib/logger.js";

const app = express();

app.get("/sumar", (req, res) => {
  const { n1, n2 } = req.query;

  if (isNaN(n1) || isNaN(n2)) {
    logger.error("Parametros incorrectos para la suma");
    return res.send("Parametros incorrectos para la suma");
  }

  logger.info(`Parámetros ${n1} y ${n2} correctos para la suma`);
  res.send(`La suma de ${n1} más ${n2} es ${Number(n1) + Number(n2)}`);
});

app.get("*", (req, res) => {
  const { url, method } = req;
  logger.warn(`Ruta ${method} ${url} no implementada`);
  res.send(`Ruta ${method} ${url} no está implementada`);
});

app.listen(3000, (err) => {
  if (err) {
    logger.fatal(`Error en servidor: ${error}`);
  } else {
    logger.info(`Servidor express escuchando en el puerto 3000`);
  }
});
