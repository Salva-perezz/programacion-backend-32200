import express, { Express, Request, Response } from "express";
import Persona from "./classes/Persona";
import { getTime } from "./libs/utils";

const app: Express = express();
const persona: Persona = new Persona("Coder", "House");

app.get("/", (req: Request, res: Response) => {
  res.json({
    time: getTime(),
    name: persona.getFullname(),
  });
});

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
