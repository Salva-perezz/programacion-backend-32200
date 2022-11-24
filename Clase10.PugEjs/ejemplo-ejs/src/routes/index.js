import { Router } from "express";

const router = Router();
const products = [
  {
    title: "Lapiz",
    price: 150,
    stock: 500,
  },
  {
    title: "Regla",
    price: 200,
    stock: 500,
  },
  {
    title: "Goma de borrar",
    price: 100,
    stock: 1000,
  },
];

router.get("/products", (req, res) => {
  res.render("main.ejs", {
    products,
    title: "Tienda Salva",
    color: "blue",
    footer: "<p>Copyright 2022</p>",
  });
});

router.get("/redirect", (req, res) => {
  res.redirect("/products");
});

export default router;
