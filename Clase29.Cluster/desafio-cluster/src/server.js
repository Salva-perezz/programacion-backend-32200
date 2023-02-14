import cluster from "cluster";
import express from "express";
import os from "os";
import yargs from "yargs";

const app = express();
const port = yargs(process.argv.slice(2)).argv._[0] || 8080;
const cpus = os.cpus();

if (cluster.isPrimary) {
  console.log(`
  CPUS: ${cpus.length}
  Primary PID: ${process.pid}
  `);
  cpus.map(() => {
    cluster.fork();
  });

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);

    cluster.fork();
  });
} else {
  app.get("/", (req, res) => {
    res.send(
      `Servidor express en puerto ${port} - PID ${
        process.pid
      } - ${new Date().toLocaleString()}`
    );
  });

  app.listen(port, () => {
    console.log(`
    Server listening port ${port}
    Worker PID: ${process.pid}
    `);
  });
}
