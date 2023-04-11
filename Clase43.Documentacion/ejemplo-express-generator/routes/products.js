const { Router } = require("express");

const router = Router();
const products = [];

router
  .route("/")
  .get((req, res) => {
    res.json({ products });
  })
  .post((req, res) => {
    const { name, price } = req.body;
    const id = products.length ? products[products.length - 1].id + 1 : 1;

    products.push({ name, price, id });

    res.json({ name, price, id });
  });

router
  .route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    const product = products.find(
      (storedProduct) => storedProduct.id === Number(id)
    );
    console.log(product);
    res.json(product);
  })
  .put((req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const productIndex = products.findIndex(
      (storedProduct) => storedProduct.id === Number(id)
    );

    products[productIndex] = { name, price, id: Number(id) };

    res.json({ name, price, id });
  })
  .delete((req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex(
      (storedProduct) => storedProduct.id === Number(id)
    );

    products[productIndex] = null;

    res.sendStatus(200);
  });

module.exports = router;
