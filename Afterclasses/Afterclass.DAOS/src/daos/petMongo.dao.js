import { Pet } from "../model/pet.model.js";
import { MongoDao } from "./mongo.dao.js";

export class PetMongoDao extends MongoDao {
  constructor() {
    super(Pet);
  }
}
