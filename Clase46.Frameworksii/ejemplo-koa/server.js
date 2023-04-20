import Koa from "koa";
import { koaBody } from "koa-body";
import mongoose from "mongoose";
import router from "./routes/index.js";

const app = new Koa();

app.use(koaBody());

app.use(router.routes());

app.use((ctx) => {
  ctx.response.status = 404;
  ctx.body = {
    status: "Not found",
    message: "Route not found",
  };
});

await mongoose.connect(
  "mongodb://salvax:salva@ac-4hsnilf-shard-00-00.uriryq6.mongodb.net:27017,ac-4hsnilf-shard-00-01.uriryq6.mongodb.net:27017,ac-4hsnilf-shard-00-02.uriryq6.mongodb.net:27017/?ssl=true&replicaSet=atlas-25e5oo-shard-0&authSource=admin&retryWrites=true&w=majority"
);

console.log("Database connected");

app.listen(3000);
console.log("Server listening port 3000");
