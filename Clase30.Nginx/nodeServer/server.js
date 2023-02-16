const express = require("express");
const cluster = require("cluster");
const os = require("os");

const app = express();
const PORT = 8081;
const cpus = os.cpus();
const isCluster = true;

if (isCluster && cluster.isPrimary) {
  cpus.map(() => {
    cluster.fork();
  });

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);

    cluster.fork();
  });
} else {
  //app.use(express.static(__dirname + "/public"));
  app.get("/datos", (req, res) => {
    console.log(`port: ${PORT} -> Fyh: ${Date.now()}`);
    res.send(
      `Servidor express <span style="color:blueviolet;">(Nginx)</span> en ${PORT} - <b>PID ${
        process.pid
      }</b> - ${new Date().toLocaleString()}`
    );
  });

  app.listen(PORT, (err) => {
    if (!err)
      console.log(
        `Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`
      );
  });
}
