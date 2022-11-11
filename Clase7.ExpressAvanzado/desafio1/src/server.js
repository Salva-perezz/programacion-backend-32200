import express from "express";

const app = express();
const frase = "Hola mundo como estan";

app.get("/api/frase", (req, res) => {
  res.json({ frase });
});

app.get("/api/letra/:num", (req, res) => {
  if (isNaN(Number(req.params.num))) {
    return res.json({ error: "El parametro no es un numero" });
  }

  const indiceLetra = Number(req.params.num) - 1;

  res.json({ letra: frase[indiceLetra] });
});

app.get("/api/palabra/:num", (req, res) => {
  if (isNaN(Number(req.params.num))) {
    return res.json({ error: "El parametro no es un numero" });
  }

  const indicePalabra = Number(req.params.num) - 1;
  const fraseArray = frase.split(" ");

  res.json({ palabra: fraseArray[indicePalabra] });
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server listening port 3000");
  }
});
