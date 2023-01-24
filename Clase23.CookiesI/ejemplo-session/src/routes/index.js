import { Router } from "express";
import { controller } from "../controllers/index.js";
import { middlewares } from "../middlewares/index.js";

const router = Router();

router.get("/con-session", controller.conSession);
router.get("/logout", controller.logout);
router.post("/login", controller.login);
router.get("/privado", middlewares.authMiddleware, controller.privado);

export default router;
