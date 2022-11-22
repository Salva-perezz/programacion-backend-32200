import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("datos.pug", {
    nombreCompleto: "Pepe Martinez",
    edad: 35,
    altura: "2mts",
    edadStyle: "color: red;",
  });
});

export default router;
