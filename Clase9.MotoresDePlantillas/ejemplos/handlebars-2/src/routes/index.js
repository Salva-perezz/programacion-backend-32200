import { Router } from "express";

const router = Router();
const products = [
  {
    id: 1,
    title: "Lapiz",
    price: 125,
    thumbnail:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.quieninvento.org%2Fwp-content%2Fuploads%2F2013%2F06%2FLapiz.jpg&f=1&nofb=1",
  },
  {
    id: 2,
    title: "Regla",
    price: 125,
    thumbnail:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.maplusa.com%2Fwp-content%2Fuploads%2F2014%2F04%2F14042-800x900.jpg&f=1&nofb=1",
  },
  {
    id: 3,
    title: "Goma",
    price: 125,
    thumbnail:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcentralpapeleria.es%2F4799-thickbox_default%2Fgoma-de-borrar-milan-caucho-840-tinta-y-lapiz-ud.jpg&f=1&nofb=1",
  },
];

router.get("/product/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === Number(id));

  res.render("product", product);
});

router.get("/product", (req, res) => {
  res.render("products", { products, hasAny: true });
});

export default router;
