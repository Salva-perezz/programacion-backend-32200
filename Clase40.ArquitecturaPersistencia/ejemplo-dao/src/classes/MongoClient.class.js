import mongoose from "mongoose";
import CustomError from "./CustomError.class.js";
import DBClient from "./DBClient.class.js";

export default class MongoClient extends DBClient {
  constructor() {
    super();
    this.connected = false;
    this.client = mongoose;
  }

  async connect() {
    try {
      await this.client.connect(
        "mongodb+srv://salvax:salva@cluster0.uriryq6.mongodb.net/?retryWrites=true&w=majority"
      );

      this.connected = true;

      console.log("Database connected!");
    } catch (err) {
      const error = new CustomError(500, "Error connecting to the database");
      console.log(error);

      throw error;
    }
  }

  async disconnect() {
    try {
      await this.client.connection.close();

      this.connected = false;

      console.log("Database disconnected!");
    } catch (err) {
      const error = new CustomError(500, "Error disconnecting to the database");
      console.log(error);

      throw error;
    }
  }
}
