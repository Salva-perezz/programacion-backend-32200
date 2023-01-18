import { config } from "../config/config.js";
import { PetMongoDao } from "./petMongo.dao.js";
import { UserMongoDao } from "./userMongo.dao.js";

let PetDao;
let UserDao;

if (config.database === "MONGO") {
  PetDao = PetMongoDao;
  UserDao = UserMongoDao;
} else {
  //   PetDao = PetFirebaseDao;
  //   UserDao = UserFirebaseDao;
}

export const Daos = { PetDao, UserDao };
