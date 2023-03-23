import { Router } from "express";
import { petController } from "../controllers/pet.controller.js";

const router = Router();

router.get("/pet", petController.getPets);

export default router;
