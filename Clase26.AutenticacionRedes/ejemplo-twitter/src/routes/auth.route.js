import { Router } from "express";
import passport from "passport";
import { authController } from "../controllers/index.js";

const router = Router();

router.get("/login", authController.serverLogin);
router.get("/logout", authController.logout);
router.get("/twitter", passport.authenticate("twitter"));
router.get(
  "/twitter/callback",
  passport.authenticate("twitter", {
    successRedirect: "/data",
    failureRedirect: "/auth/fail-login",
  })
);
router.get("/fail-login", authController.failLogin);

export default router;
