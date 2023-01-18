import { Router } from "express";
import { petRouter } from "./pet.route.js";
import { userRouter } from "./user.route.js";

const router = Router();

router.use("/pet", petRouter);
router.use("/user", userRouter);

export default router;
