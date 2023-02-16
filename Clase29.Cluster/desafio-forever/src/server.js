import express from "express";

const app = express();
const port = 8081;

app.get("/", (req, res) => {
  for (let index = 0; index < 1e9; index++) {}
  res.send(
    `Servidor express en puerto ${port} - PID ${
      process.pid
    } - ${new Date().toLocaleString()}`
  );
});

app.listen(port, () => {
  console.log(`Server listening port ${port}`);
});
