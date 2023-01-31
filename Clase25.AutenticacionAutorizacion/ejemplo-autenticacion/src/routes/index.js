import { Router } from "express";
import { authController } from "../controllers/index.js";

const router = Router();

router.get("/register", authController.serveRegister);
router.get("/login", authController.serveLogin);
router.get("/welcome", authController.serveWelcome);

router.post("/register", authController.register);
router.post("/login", authController.login);

export default router;
