import express, { Router, json, urlencoded } from "express";

const app = express();
const router = Router();

const personas = [];
const mascotas = [];

app.use(json());
app.use(urlencoded({ extended: true }));

router
  .route("/personas")
  .get((req, res) => {
    res.json(personas);
  })
  .post((req, res) => {
    const { nombre, apellido, edad } = req.body;

    if (!nombre || !apellido || !edad)
      res.status(400).send("You must send name, surname and age");

    personas.push({ nombre, apellido, edad });

    res.status(201).json({ nombre, apellido, edad });
  });

router
  .route("/mascotas")
  .get((req, res) => {
    res.json(mascotas);
  })
  .post((req, res) => {
    const { nombre, raza, edad } = req.body;

    if (!nombre || !raza || !edad)
      res.status(400).send("You must send name, breed and age");

    mascotas.push({ nombre, raza, edad });

    res.status(201).json({ nombre, raza, edad });
  });

app.use("/", router);

app.listen(3000, () => {
  console.log("Server listening port 3000");
});

app.on("error", (error) => {
  console.log(error);
});
