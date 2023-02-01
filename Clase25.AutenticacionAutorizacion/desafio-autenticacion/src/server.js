import express from "express";
import session from "express-session";
import router from "./routes/index.js";

const app = express();

app.use(
  session({
    secret: "salva",
    resave: false,
    rolling: true,
    saveUninitialized: false,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
