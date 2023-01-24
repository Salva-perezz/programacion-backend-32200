import { Router } from "express";
import { controller } from "../controllers/index.js";

const router = Router();

router.get("/", controller.baseController);
router.get("/olvidar", controller.olvidar);

export default router;
