import { Carts } from "../models/car.model.js";
import MongoDao from "./mongo.dao.js";

let instance;

export class CartMongoDao extends MongoDao {
  constructor() {
    super(Carts);
  }

  static getInstance() {
    if (!instance) instance = new CartMongoDao();

    return instance;
  }
}
