import productController from "./controller/product.controller.js";

await productController.create({
  name: "Lapiz",
  description: "Lapiz filoso",
  price: 5,
});

await productController.create({
  name: "Regla",
  description: "Regla filosa",
  price: 2,
});

await productController.create({
  name: "Goma de borrar",
  description: "Goma que borra",
  price: 1,
});

await productController.create({
  name: "Hoja A4",
  description: "Hoja blanca",
  price: 0.5,
});

const productsDTO = await productController.getAllWithCurrencies();

console.log(productsDTO);
