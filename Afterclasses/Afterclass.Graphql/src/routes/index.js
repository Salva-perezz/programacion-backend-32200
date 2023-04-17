import { Router } from "express";
import { bookRouter } from "./book.route.js";

const router = Router();

router.use("/book", bookRouter);

export default router;
