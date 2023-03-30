import { Router } from "express";
import newRouter from "./new.route.js";

const router = Router();

router.use("/new", newRouter);

export default router;
