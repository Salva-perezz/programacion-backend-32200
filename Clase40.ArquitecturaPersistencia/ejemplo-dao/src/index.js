import ProductDAO from "./classes/ProductDAO.class.js";

const Product = new ProductDAO();

await Product.create({
  name: "Goma de borrar",
  description: "borra lapiz",
  price: 20,
});

await Product.create({
  name: "Lapiz",
  description: "Lapiz filoso",
  price: 120,
});
await Product.create({
  name: "Regla",
  description: "Regla filosa",
  price: 170,
});
await Product.create({
  name: "Hoja A4",
  description: "Hoja blanca",
  price: 10,
});

const products = await Product.getAll();

console.log(products);
