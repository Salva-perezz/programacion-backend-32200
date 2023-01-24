import { Router } from "express";
import { controller } from "../controllers/index.js";

const router = Router();

router.get("/set", controller.set);
router.get("/setEx", controller.setEx);
router.get("/get", controller.getCookies);
router.get("/clear", controller.clearSet);
router.get("/setSigned", controller.setSigned);

export default router;
