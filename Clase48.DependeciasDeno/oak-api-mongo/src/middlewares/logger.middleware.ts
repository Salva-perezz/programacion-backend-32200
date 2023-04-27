import { Context } from "../../depts.ts";

const loggerMiddleware = async (
  ctx: Context,
  next: () => void
): Promise<void> => {
  const body = await ctx.request.body().value;
  console.log(
    `- ${ctx.request.method} ${ctx.request.url} With body ${JSON.stringify(
      body
    )}`
  );
  next();
};

export default loggerMiddleware;
