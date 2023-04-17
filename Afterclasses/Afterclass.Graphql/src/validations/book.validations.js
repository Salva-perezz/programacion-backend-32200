import { check } from "express-validator";

const createBookValidations = [
  check("title", "You need to send book title").notEmpty().trim(),
  check("price", "You need to send book price").notEmpty().trim().isNumeric(),
  check("author", "You need to send book author").notEmpty().trim(),
];

export const bookValidations = { createBookValidations };
