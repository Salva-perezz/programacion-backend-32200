import cluster from "cluster";
import express from "express";
import os from "os";

const app = express();
const cpus = os.cpus();

if (cluster.isPrimary) {
  console.log("CPUS:", cpus.length);
  cpus.map(() => {
    cluster.fork();
  });

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);

    //cluster.fork();
  });
} else {
  app.get("/", (req, res) => {
    res.send("Hola");

    cluster.worker.kill();
  });

  app.listen(3000, () => {
    console.log("Server listening port 3000");
  });
}
