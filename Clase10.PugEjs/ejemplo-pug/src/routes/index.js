import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("dato.pug", {
    nombreCompleto: "Pepe Martinez",
    edad: 35,
    altura: "2mts",
    edadStyle: "color: red;",
  });
});

router.get("/datos", (req, res) => {
  res.render("datos.pug", {
    datos: [
      {
        nombreCompleto: "Pepe Martinez",
        edad: 35,
        altura: "2mts",
        edadStyle: "color: red;",
      },
      {
        nombreCompleto: "Pepe Martinez",
        edad: 35,
        altura: "2mts",
        edadStyle: "color: red;",
      },
      {
        nombreCompleto: "Pepe Martinez",
        edad: 35,
        altura: "2mts",
        edadStyle: "color: red;",
      },
    ],
  });
});

export default router;
