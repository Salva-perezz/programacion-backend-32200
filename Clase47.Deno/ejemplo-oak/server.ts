import { Application, Context, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router.get("/", (ctx: Context) => {
  ctx.response.body = "Hello world!";
});

router.get("/saludo", (ctx: Context) => {
  ctx.response.status = 200;
  ctx.response.body = `
    <!DOCTYPE html>
    <html>
      <head><title>Hello oak!</title><head>
      <body>
        <h1 style="color: blue;">Hola como estas?</h1>
      </body>
    </html>
    `;
});

app.use(router.routes());

app.listen({ port: 3000 });

console.log("Server listening port 3000");
