import { Router } from "express";
import { bookRouter } from "./book.route.js";
import { carRouter } from "./car.route.js";

const router = Router();

router.use("/book", bookRouter);
router.use("/car", carRouter);

export default router;
