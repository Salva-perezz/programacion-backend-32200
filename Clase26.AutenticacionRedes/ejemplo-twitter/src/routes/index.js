import { Router } from "express";
import authRouter from "./auth.route.js";
import dataRouter from "./data.route.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/data", dataRouter);

export default router;
