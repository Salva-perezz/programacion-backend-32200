const atuhMiddleware = (req, res, next) => {
  if (req.session.user) {
    return next();
  }

  res.status(401).json({ error: true, data: "Not Authorized" });
};

export default atuhMiddleware;
