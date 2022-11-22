import { Router } from "express";

const router = Router();

router.get("/datos", (req, res) => {
  const { min, max, level, title } = req.query;

  res.render("datos.pug", { min, max, level, title });
});

export default router;
