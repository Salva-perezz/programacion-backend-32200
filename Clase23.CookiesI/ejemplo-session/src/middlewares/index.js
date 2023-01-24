const authMiddleware = (req, res, next) => {
  if (req.session.user === "pepe" && req.session.admin) {
    return next();
  }

  return res.status(401).send("Unauthorized");
};

export const middlewares = { authMiddleware };
