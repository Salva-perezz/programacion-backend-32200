import express from "express";

const app = express();
const port = 8083;

app.get("/", (req, res) => {
  res.send(
    `Servidor express en puerto ${port} - PID ${
      process.pid
    } - ${new Date().toLocaleString()}`
  );
});

app.listen(port, () => {
  console.log(`Server listening port ${port}`);
});
