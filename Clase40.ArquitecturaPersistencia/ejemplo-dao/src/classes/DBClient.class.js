import CustomError from "./CustomError.class.js";

export default class DBClient {
  async connect() {
    throw new CustomError(500, "Connect method not implmeneted in sub class");
  }

  async disconnect() {
    throw new CustomError(
      500,
      "Disconnect method not implmeneted in sub class"
    );
  }
}
