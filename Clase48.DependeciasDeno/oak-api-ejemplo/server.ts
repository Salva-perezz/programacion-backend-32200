import { Application, Context } from "./deps.ts";

const app = new Application();

app.use((ctx: Context) => {
  ctx.response.body = "Hello world";
});

app.listen({ port: 3000 });
console.log("Server listening port 3000");
