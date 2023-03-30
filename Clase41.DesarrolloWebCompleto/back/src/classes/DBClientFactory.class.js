import MemClient from "./MemClient.class.js";
import MongoClient from "./MongoClient.class.js";

export default class DBClientFactory {
  static getClient(db) {
    switch (db) {
      case "MONGO":
        return new MongoClient();
      case "MEM":
        return new MemClient();
    }
  }
}
