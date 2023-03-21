import { Router } from "express";
import { carController } from "../controllers/index.js";
import { carValidations } from "../validations/car.validations.js";

const router = Router();

router
  .route("/")
  .get(carController.findAllCars)
  .post(carValidations.createCarValidations, carController.createCar);

router
  .route("/:id")
  .get(carController.findCarById)
  .delete(carController.deleteCar)
  .patch(carController.updateCar);

export const carRouter = router;
