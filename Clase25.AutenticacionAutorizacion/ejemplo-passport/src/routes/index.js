import { Router } from "express";
import passport from "passport";
import { authController } from "../controllers/index.js";

const router = Router();

router.get("/logout", authController.logOut);

router
  .route("/login")
  .post(
    passport.authenticate("login", { failureRedirect: "/fail-login" }),
    authController.getLogin
  );

router
  .route("/register")
  .get(authController.getRegister)
  .post(
    passport.authenticate("register", { failureRedirect: "/fail-register" }),
    authController.getLogin
  );
router.get("/show-login", authController.getLogin);
router.get("/fail-login", authController.getLoginFailiure);
router.get("/fail-register", authController.getRegisterFailiure);

export default router;
