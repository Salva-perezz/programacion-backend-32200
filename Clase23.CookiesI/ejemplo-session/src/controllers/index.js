const conSession = (req, res) => {
  if (req.session.contador) {
    req.session.contador++;

    res.send(`Usted a visitado el sitio ${req.session.contador} veces`);
  } else {
    req.session.contador = 1;

    res.send("Bienvenid@");
  }
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send("Hubo un error :(");
    }

    res.send("Logout Ok!");
  });
};

const login = (req, res) => {
  const { username, password } = req.body;

  if (username !== "pepe" || password !== "pepepass") {
    res.send("Invalid credentials");
  }

  req.session.user = username;
  req.session.admin = true;

  res.send("Login succes");
};

const privado = (req, res) => {
  res.send("Si estas viendo esto es por que estas Logeado!");
};

export const controller = { conSession, logout, login, privado };
