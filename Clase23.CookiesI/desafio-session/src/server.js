import express, { json } from "express";
import session from "express-session";
import routes from "./routes/index.js";

const app = express();

app.use(
  session({
    secret: "coderhouse",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(json());

app.use(routes);

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
