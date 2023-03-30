import NewsMemDao from "../daos/newsMem.dao.js";
import NewsMongoDao from "../daos/newsMongo.dao.js";

export default class NewDaoFactory {
  static getClient(daoType) {
    switch (daoType) {
      case "MONGO":
        return new NewsMongoDao();
      case "MEM":
        return new NewsMemDao();
    }
  }
}
