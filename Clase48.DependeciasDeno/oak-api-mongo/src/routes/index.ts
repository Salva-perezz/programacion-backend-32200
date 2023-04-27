import { Router } from "../../depts.ts";
import userRouter from "./user.route.ts";

const router: Router = new Router();

router.use("/api", userRouter.routes());

export default router;
