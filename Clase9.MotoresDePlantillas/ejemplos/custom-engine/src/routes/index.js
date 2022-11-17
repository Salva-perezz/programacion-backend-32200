import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("product", {
    title: "Lapiz",
    price: 150,
    stock: 500,
    description: "lalalalalalala",
  });
});

export default router;
