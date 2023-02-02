import { Router } from "express";
import { authController } from "../controllers/index.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/logout", authMiddleware, authController.logout);

export default router;
