const getData = (req, res) => {
  res.json({ error: false, data: req.user });
};

export const dataController = { getData };
