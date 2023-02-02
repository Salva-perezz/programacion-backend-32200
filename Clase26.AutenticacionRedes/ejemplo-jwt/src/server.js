import express, { json, urlencoded } from "express";
import router from "./routes/index.js";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/", router);

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
