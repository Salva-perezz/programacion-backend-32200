import MongoStore from "connect-mongo";
import express from "express";
import session from "express-session";

const app = express();
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(
  session({
    secret: "coderhouse",
    rolling: true, // Esto lo que hace es que reinicia el tiempo de expiracion de las sesiones con cada request
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongoUrl:
        "mongodb+srv://salvax:salva@cluster0.uriryq6.mongodb.net/?retryWrites=true&w=majority",
      mongoOptions,
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
