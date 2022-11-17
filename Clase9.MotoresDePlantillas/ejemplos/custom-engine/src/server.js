import express from "express";
import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import routes from "./routes/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.engine("salva", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err, content);

    const rendered = content
      .toString()
      .replace("^^title$$", `${options.title}`)
      .replace("^^price$$", `${options.price}`)
      .replace("^^stock$$", `${options.stock}`)
      .replace("^^description$$", `${options.description}`);

    return callback(null, rendered);
  });
});

app.set("view engine", "salva");
app.set("views", join(__dirname, "/views"));

app.use("/", routes);

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
