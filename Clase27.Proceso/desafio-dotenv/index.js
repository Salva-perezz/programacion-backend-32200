import dotenv from "dotenv";
dotenv.config();

console.log({
  modo: process.env.MODO || "prod",
  puerto: process.env.PUERTO || 0,
  debug: Boolean(process.env.DEBUG) || false,
});
