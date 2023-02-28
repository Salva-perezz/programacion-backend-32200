import dotenv from "dotenv";
import winston from "winston";

dotenv.config();

const buildProdLogger = () => {
  const prodlogger = winston.createLogger({
    transports: [
      new winston.transports.File({ filename: "debug.log", level: "debug" }),
      new winston.transports.File({ filename: "error.log", level: "error" }),
    ],
  });

  return prodlogger;
};

const buildDevLogger = () => {
  const devlogger = winston.createLogger({
    transports: [new winston.transports.Console({ level: "info" })],
  });

  return devlogger;
};

let logger;

if (process.env.NODE_ENV.toLocaleUpperCase() === "PROD") {
  logger = buildProdLogger();
} else {
  logger = buildDevLogger();
}

export default logger;
