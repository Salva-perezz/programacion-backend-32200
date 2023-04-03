import { CartMemDao } from "./cartMem.dao.js";
import { CartMongoDao } from "./cartMongo.dao.js";

export default class CartDaoFactory {
  static getDao(db) {
    switch (db) {
      case "MONGO":
        return CartMongoDao.getInstance();
      case "MEM":
        return CartMemDao.getInstance();
    }
  }
}
