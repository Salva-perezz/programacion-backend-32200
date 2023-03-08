import { Router } from "express";
import logger from "../logger.js";

const router = Router();

router.get("/saludo", (req, res) => {
  try {
    throw { error: "aah" };
    res.send("Hola");
  } catch (err) {
    logger.error(err, "Error =>");
    res.sendStatus(500);
  }
});

router.get("/test", (req, res) => {
  try {
    res.send("Up & running");
  } catch (err) {
    logger.error(err, "Error =>");
    res.sendStatus(500);
  }
});

export default router;
