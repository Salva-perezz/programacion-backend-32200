import dotenv from "dotenv";
import pino from "pino";

dotenv.config();

const buildProdLogger = () => {
  const prodLogger = pino("debug.log");

  prodLogger.level = "debug";

  return prodLogger;
};

const buildDevLogger = () => {
  const devLogger = pino();

  devLogger.level = "info";

  return devLogger;
};

let logger;

if (process.env.NODE_ENV.toLocaleUpperCase() === "PROD") {
  logger = buildProdLogger();
} else {
  logger = buildDevLogger();
}

export default logger;
