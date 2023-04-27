import { Application, config } from "../depts.ts";
import loggerMiddleware from "./middlewares/logger.middleware.ts";
import router from "./routes/index.ts";

const app: Application = new Application();
const { PORT } = await config();

app.use(loggerMiddleware);
app.use(router.routes());

app.listen({ port: Number(PORT) });
console.log(`Server listening http://127.0.0.1:${PORT}`);
