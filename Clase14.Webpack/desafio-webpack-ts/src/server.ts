import express, {
  Express,
  NextFunction,
  Request,
  Response,
  Router,
} from "express";
import Perimetro from "./classes/Perimetro";
import Superficie from "./classes/Superficie";

const app: Express = express();
const admin = true;

const checkIfAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (admin) {
    next();
  } else {
    res.json({
      error: -1,
      descripcion: `ruta ${req.path} método ${req.method} no autorizada`,
    });
  }
};

app.get("/cuadrado", checkIfAdmin, (req: Request, res: Response) => {
  const { lado, operacion } = req.query;
  const resultado =
    operacion === "perimetro"
      ? Perimetro.cuadrado(Number(lado))
      : Superficie.cuadrado(Number(lado));
  const response = {
    figura: "Cuadrado",
    calculo: operacion,
    entryLado: lado,
    resultado,
  };

  res.json(response);
});

app.get("/rectangulo", (req: Request, res: Response) => {
  const { ancho, largo, operacion } = req.query;
  const resultado =
    operacion === "perimetro"
      ? Perimetro.rectangulo(Number(largo), Number(ancho))
      : Superficie.rectangulo(Number(largo), Number(ancho));
  const response = {
    figura: "Rectangulo",
    calculo: operacion,
    entryLado: [ancho, largo],
    resultado,
  };

  res.json(response);
});

app.get("/circulo", checkIfAdmin, (req: Request, res: Response) => {
  const { radio, operacion } = req.query;
  const resultado =
    operacion === "perimetro"
      ? Perimetro.circulo(Number(radio))
      : Superficie.circulo(Number(radio));
  const response = {
    figura: "Circulo",
    calculo: operacion,
    entryLado: radio,
    resultado,
  };

  res.json(response);
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.json({
    error: -2,
    descripcion: `ruta ${req.path} método ${req.method} no implementada`,
  });
});

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
