import CustomError from "./CustomError.class.js";

export default class DBClient {
  connect() {
    throw new CustomError(500, "Method not implemented in sub-class");
  }

  disconnect() {
    throw new CustomError(500, "Method not implemented in sub-class");
  }
}
