import { Router } from "express";
import NewController from "../controllers/new.controller.js";

const router = Router();
const newControler = new NewController();

router.get("/", newControler.getNews);
router.post("/", newControler.create);

export default router;
