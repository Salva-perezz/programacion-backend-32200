import jwt from "jsonwebtoken";
import tokensBlacklist from "../utils/blacklist.js";

const authMiddleware = (req, res, next) => {
  const headerToken = req.headers.authorization;

  if (!headerToken)
    return res.status(401).json({ error: true, data: "Unauthorized" });

  const token = headerToken.split(" ")[1];

  if (tokensBlacklist.includes(token))
    return res.status(401).json({ error: true, data: "Unauthorized" });

  jwt.verify(token, "SALVAAA", (err, decoded) => {
    if (err) return res.status(401).json({ error: true, data: "Unauthorized" });

    req.user = decoded.data;
    req.token = token;

    next();
  });
};

export default authMiddleware;
