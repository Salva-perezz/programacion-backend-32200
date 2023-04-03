import cors from "cors";
import express, { json, urlencoded } from "express";
import DBClientFactory from "./classes/DBClientFactory.class.js";
import config from "./config/config.js";
import router from "./routes/index.js";

const app = express();
const db = DBClientFactory.getClient(config.database);

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(
  cors({
    origin: config.corsOrigin,
    //methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use("/api", router);

await db.connect();
app.listen(config.port, () => {
  console.log(`Server listening port ${config.port}`);
});
