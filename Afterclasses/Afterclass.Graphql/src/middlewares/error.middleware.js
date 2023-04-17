import Response from "../lib/response.lib.js";

const errorMiddleware = async (err, req, res, next) => {
  console.log("Middleware", err);
  const statusCode = err.status || 400;
  res.status(statusCode).json(new Response(null, err.message, true));
};

export default errorMiddleware;
