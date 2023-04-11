import express, { json } from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
const numbers = [];
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API Documentada - Coderhouse",
      description: "API Numeros documentada",
    },
  },
  apis: ["./docs/**/*.yaml"],
};
const swaggerSpecs = swaggerJsDoc(options);

app.use(json());

app.get("/", (req, res) => {
  res.send("Ruta base API");
});

app.post("/number", (req, res) => {
  const { number } = req.body;
  const numberId = numbers.length - 1;

  numbers.push({ id: numberId, number });

  res.json(numbers[numberId]);
});

app.get("/number", (req, res) => {
  res.json({ numbers });
});

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
