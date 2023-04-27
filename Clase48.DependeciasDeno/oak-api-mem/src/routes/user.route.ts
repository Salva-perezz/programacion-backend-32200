import { Router } from "../../depts.ts";
import userHandler from "../handlers/user.handler.ts";

const router: Router = new Router();

router.post("/user", userHandler.createUser);
router.get("/user/:userId", userHandler.findUser);
router.put("/user/:userId", userHandler.updateUser);
router.delete("/user/:userId", userHandler.deleteUser);

export default router;
