import cookieParser from "cookie-parser";
import express, { json } from "express";
import routes from "./routes/index.js";

const app = express();

app.use(cookieParser("Salva"));
app.use(json());

app.use(routes);

app.listen(3000, () => {
  console.log("Serer listening port 3000");
});
