import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";
import routes from "./routes/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: join(__dirname, "/views/layouts/main.hbs"),
    layoutsDir: join(__dirname, "/views/layouts"),
    partialsDir: join(__dirname, "/views/partials"),
  })
);

app.set("view engine", "hbs");
app.set("views", join(__dirname, "/views"));

app.use("/", routes);

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
