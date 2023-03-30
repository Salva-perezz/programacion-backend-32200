import CustomError from "../classes/CustomError.class.js";
import DAO from "../classes/DAO.class.js";
import New from "../models/new.model.js";

export default class NewsMongoDao extends DAO {
  constructor() {
    super();
    this.collection = New;
  }

  async getAll() {
    try {
      const allNews = await this.collection.find();

      return allNews;
    } catch (err) {
      console.log("Error:", err);

      throw new CustomError(500, "Error getting News");
    }
  }

  async create(newToCreate) {
    try {
      const createdNew = await this.collection.create(newToCreate);

      return createdNew;
    } catch (err) {
      console.log("Error:", err);

      throw new CustomError(500, "Error creating New");
    }
  }
}
