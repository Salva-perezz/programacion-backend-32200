import express from "express";
const app = express();

function calcularRandoms(min, max, cant) {
  const randoms = [];
  for (let i = 0; i < cant; i++) {
    let random = parseInt(Math.random() * (max - min + 1)) + min;
    randoms.push(random);
  }
  return randoms;
}

app.get("/random-debug", (req, res) => {
  const randoms = calcularRandoms(0, 9, 10000);
  console.log(randoms);
  res.json({ randoms });
});

app.get("/random-nodebug", (req, res) => {
  const randoms = calcularRandoms(0, 9, 10000);
  res.json({ randoms });
});

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));

// artillery quick --count 50 -n 50 http://127.0.0.1:8080/random-debug > result_debug.txt

// artillery quick --count 50 -n 50 http://127.0.0.1:8080/random-nodebug > result_nodebug.txt
