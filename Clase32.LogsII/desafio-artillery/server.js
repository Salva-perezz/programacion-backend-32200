import cluster from "cluster";
import express from "express";
import os from "os";

const app = express();
const MODO_CLUSTER = process.argv[2] == "CLUSTER";

if (MODO_CLUSTER && cluster.isPrimary) {
  const numCPUs = os.cpus().length;

  console.log(`Número de procesadores: ${numCPUs}`);
  console.log(`PID MASTER ${process.pid}`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(
      "Worker",
      worker.process.pid,
      "died",
      new Date().toLocaleString()
    );
    cluster.fork();
  });
} else {
  function calcularRandoms(min, max, cant) {
    let randoms = [];
    for (let i = 0; i < cant; i++) {
      let random = parseInt(Math.random() * (max - min + 1)) + min;
      randoms.push(random);
    }
    return randoms;
  }

  app.get("/random-debug", (req, res) => {
    let randoms = calcularRandoms(0, 9, 10000);
    console.log(randoms);
    res.json({ randoms });
  });

  app.get("/random-nodebug", (req, res) => {
    let randoms = calcularRandoms(0, 9, 10000);
    res.json({ randoms });
  });

  const PORT = 8080;
  const server = app.listen(PORT, () => {
    console.log(
      `Servidor express escuchando en el puerto ${PORT} - PID MASTER ${process.pid}`
    );
  });
  server.on("error", (error) => console.log(`Error en servidor ${error}`));
}

// artillery quick --count 50 -n 50 http://127.0.0.1:8080/random-debug > result_fork.txt

// artillery quick --count 50 -n 50 http://127.0.0.1:8080/random-debug > result_cluster.txt
