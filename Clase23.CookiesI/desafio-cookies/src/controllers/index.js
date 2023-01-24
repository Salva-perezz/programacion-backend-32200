const getCookies = (req, res) => {
  res.json({
    cookies: req.cookies,
    signedCookies: req.signedCookies,
  });
};

const createCookie = (req, res) => {
  const { cookieName, cookieValue, cookieAge } = req.body;

  if (!cookieName || !cookieValue) {
    return res.json({ error: "Falta nombre o valor" });
  }

  const cookieOptions = cookieAge ? { maxAge: Number(cookieAge) } : {};

  res.cookie(cookieName, cookieValue, cookieOptions).json({ proceso: "ok" });
};

const deleteCookie = (req, res) => {
  const { cookieName } = req.params;

  if (!cookieName || !req.cookies[cookieName]) {
    return res.json({ error: "Nombre no encontrado" });
  }

  res.clearCookie(cookieName).json({ proceso: "ok" });
};

export const controller = { getCookies, createCookie, deleteCookie };
