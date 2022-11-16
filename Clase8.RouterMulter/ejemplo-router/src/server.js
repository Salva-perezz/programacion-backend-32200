import express, { Router } from "express";
import personaRouter from "./routes/persona.route.js";
import mascotaRouter from "./routes/mascotas.route.js";

const app = express();

app.use("/api/mascota", mascotaRouter);
app.use("/api/persona", personaRouter);

app.listen(3000, () => {
  console.log("Sever listening port 3000");
});
