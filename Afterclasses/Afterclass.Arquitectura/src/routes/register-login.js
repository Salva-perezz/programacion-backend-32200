import { Router } from 'express';
import passport from "passport";
import { authController } from "../controllers/index.js";
import upload from '../lib/multer.js';

const router = Router()

router
    .route('/login')
    .get(authController.getLogin)
    .post(
        passport.authenticate("login", { failureRedirect: "/fail-login" }),
        authController.getLogin
    );

router
    .route("/register")
    .get(authController.getRegister)
    .post(
        upload.single("photo"),
        passport.authenticate("register", { failureRedirect: "/fail-register" }),
        authController.getLoginMail,
    );

router.get("/fail-login", authController.getLoginFailiure);
router.get("/fail-register", authController.getRegisterFailiure);

router.get("/logout", authController.logOut);

export const registerLoginRouter = router;