import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("Nueva conexion");

  req.locals = "salva";

  next();
});

app.get("/hola", (req, res) => {
  console.log(req.locals);
  res.send("Hola");
});

app.use((req, res, next) => {
  console.log("Nueva conexion que no llego a nada");

  res.sendStatus(404);
});

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
