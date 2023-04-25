import express, { Request, Response } from "npm:express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hola mundo");
});

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
