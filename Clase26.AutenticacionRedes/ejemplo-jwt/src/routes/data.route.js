import { Router } from "express";
import { dataController } from "../controllers/index.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", authMiddleware, dataController.getData);

export default router;
