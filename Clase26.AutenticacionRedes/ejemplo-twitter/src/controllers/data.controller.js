const getData = (req, res) => {
  if (!req.user.contador) req.user.contador = 0;
  req.user.contadot++;

  res.render("datos", {
    name: req.user.displayName,
    username: req.user.username,
    picture: req.user.photos[0].value,
    counter: req.user.contador,
  });
};

export const dataController = { getData };
