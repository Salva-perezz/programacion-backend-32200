import { check } from "express-validator";

const createCarValidations = [
  check("model", "You need to send car model").notEmpty().trim(),
  check("price", "You need to send car price").notEmpty().trim().isNumeric(),
  check("year", "You need to send car year").notEmpty().trim().isNumeric(),
  check("color", "You need to send car color").notEmpty().trim(),
];

export const carValidations = { createCarValidations };
