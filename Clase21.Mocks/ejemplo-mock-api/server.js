import express from "express";

const app = express();

app.get("/api/usuarios", (req, res) => {
  const usuarios = [
    { id: 1, name: "Salva", lastname: "Perez" },
    { id: 2, name: "Martina", lastname: "Perez" },
    { id: 3, name: "Jose", lastname: "Perez" },
    { id: 4, name: "Pepe", lastname: "Perez" },
    { id: 5, name: "Julieta", lastname: "Perez" },
  ];

  res.json(usuarios);
});

app.listen(3000, () => {
  console.log("Todo ok");
});
