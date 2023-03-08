import { Router } from "express";
import productRouter from "./product.route.js";

const router = Router();

router.get("/", (req, res) => res.send("test-api"));
router.use("/product", productRouter);

export default router;
