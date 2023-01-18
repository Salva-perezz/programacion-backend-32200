import { Router } from "express";
import { petController } from "../controllers/pet.controller.js";

const router = Router();

router.route("/").get(petController.getAllPets).post(petController.createPet);
router.route(":id").get().put().delete();

export const petRouter = router;
