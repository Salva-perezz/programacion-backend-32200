import { Router } from "express";
import { authController } from "../controllers/index.js";
import atuhMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/login", authController.serverLogin);
router.get("/register", authController.serverRegister);
router.get("/datos", atuhMiddleware, authController.data);

router.post("/login", authController.login);
router.post("/register", authController.register);

export default router;
