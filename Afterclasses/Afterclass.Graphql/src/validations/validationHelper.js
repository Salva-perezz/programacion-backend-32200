import { validationResult } from "express-validator";

const validationHelper = (req) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw { status: 400, message: errors };
  }
};

export default validationHelper;
