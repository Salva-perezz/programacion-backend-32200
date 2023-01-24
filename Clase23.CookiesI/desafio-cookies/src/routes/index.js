import { Router } from "express";
import { controller } from "../controllers/index.js";

const router = Router();

router
  .route("/cookies/:cookieName?")
  .get(controller.getCookies)
  .post(controller.createCookie)
  .delete(controller.deleteCookie);

export default router;
