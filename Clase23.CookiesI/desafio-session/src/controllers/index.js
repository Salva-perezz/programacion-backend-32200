const baseController = (req, res) => {
  let message;

  if (req.session.contador) {
    req.session.contador++;

    message = req.session.user
      ? `${req.session.user} visitaste la pagina ${req.session.contador} veces`
      : `Usted visito la pagina ${req.session.contador} veces`;
  } else {
    req.session.contador = 1;
    req.session.user = req.query.name;

    message = req.query.name
      ? `${req.query.name} visitaste la pagina ${req.session.contador} veces`
      : `Usted visito la pagina ${req.session.contador} veces`;
  }

  res.send(message);
};

const olvidar = (req, res) => {
  const message = req.session.user
    ? `Hasta luego ${req.session.user}`
    : "Hasta luego";

  req.session.destroy((err) => {
    if (err) {
      return res.send("Error :(");
    }

    res.send(message);
  });
};

export const controller = { baseController, olvidar };
