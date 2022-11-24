import express, { json, urlencoded } from "express";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

const mensajes = [
  {
    id: 1,
    mensaje: "Hola pepe",
  },
  {
    id: 2,
    mensaje: "Hola Juan",
  },
  {
    id: 3,
    mensaje: "Hola Martina",
  },
  {
    id: 4,
    mensaje: "Hola Julieta",
  },
];

app.get("/api/mensaje", (req, res) => {
  console.log(`Nueva request de: ${req.ip}`);

  const { nombre, apellido } = req.query;

  console.log(`Hola ${nombre} ${apellido}`);

  res.json({
    status: "Ok",
    data: {
      saludo: "Hola mundo!",
    },
  });
});

app.get("/api/mensaje/:id", (req, res) => {
  const { id } = req.params;
  const mensaje = mensajes.find((mensaje) => mensaje.id === Number(id));

  if (!mensaje) {
    res.status(404).json({
      status: "Not found",
      data: null,
    });
  } else {
    res.status(200).json({
      status: "Ok",
      data: mensaje,
    });
  }
});

app.post("/api/mensaje", (req, res) => {
  const { mensaje } = req.body;
  console.log("Body", req.body);
  const lastMessageId = mensajes[mensajes.length - 1].id;

  mensajes.push({ mensaje, id: lastMessageId + 1 });

  res.sendStatus(201);
});

app.put("/api/mensaje/:id", (req, res) => {
  const { mensaje } = req.body;
  const { id } = req.params;

  const messageIndex = mensajes.findIndex((mensaje) => {
    return mensaje.id === Number(id);
  });

  mensajes.splice(messageIndex, 1, { id, mensaje });

  res.sendStatus(200);
});

app.delete("/api/mensaje/:id", (req, res) => {
  const { id } = req.params;

  const messageIndex = mensajes.findIndex(
    (mensaje) => mensaje.id === Number(id)
  );

  mensajes.splice(messageIndex, 1);

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server listening http://127.0.0.1:3000");
});
