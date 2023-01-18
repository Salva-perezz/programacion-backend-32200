import { User } from "../model/user.model.js";
import { MongoDao } from "./mongo.dao.js";

export class UserMongoDao extends MongoDao {
  constructor() {
    super(User);
  }
}
