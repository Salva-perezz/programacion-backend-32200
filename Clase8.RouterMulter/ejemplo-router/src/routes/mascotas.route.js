import { Router } from "express";

const router = Router();

router
  .route("/")
  .get((req, res) => {
    console.log("Holaa");
  })
  .post((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});

export default router;
