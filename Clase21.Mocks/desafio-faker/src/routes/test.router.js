import { Router } from "express";
import { testController } from "../controllers/test.controller.js";

const router = Router();

router.get("/", testController.getTestData);

export default router;
