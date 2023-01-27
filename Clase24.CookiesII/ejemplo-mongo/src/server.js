import MongoStore from "connect-mongo";
import express from "express";
import session from "express-session";

const app = express();

app.use(
  session({
    secret: "coderhouse",
    rolling: true, // Esto lo que hace es que reinicia el tiempo de expiracion de las sesiones con cada request
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongoUrl: "mongodb://localhost:27017",
    }),
  })
);

app.get("/", (req, res) => {
  const { name } = req.query;

  if (name) req.session.user = name;

  res.send(`Hola ${req.session.user}`);
});

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
