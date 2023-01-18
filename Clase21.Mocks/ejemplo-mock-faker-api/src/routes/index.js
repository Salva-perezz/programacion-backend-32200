import { Router } from "express";
import { mockController } from "../controllers/mock.controller.js";

const router = Router();

router.route("/users/populate").post(mockController.populateUsers);

router
  .route("/users/:id?")
  .get(mockController.getUser)
  .post(mockController.createUser)
  .put(mockController.updateUser)
  .delete(mockController.deleteUser);

export default router;
