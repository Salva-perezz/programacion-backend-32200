const express = require("express");
const app = express();
const PORT = 8083;

app.get("/nombre", (req, res) => {
  console.log(`port: ${PORT} -> Fyh: ${Date.now()}`);
  res.send("Pepe");
});

app.listen(PORT, (err) => {
  if (!err) console.log(`Servidor express escuchando en el puerto ${PORT}`);
});
