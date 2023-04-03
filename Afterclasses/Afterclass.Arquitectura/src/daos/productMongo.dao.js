import ProductDTO from "../dto/product.dto.js";
import { Product } from "../models/product.model.js";
import getCurrencyPrice from "../utils/quoter.js";
import MongoDao from "./mongo.dao.js";

let instance;

export class ProductMongoDao extends MongoDao {
  constructor() {
    super(Product);
  }

  static getInstance() {
    if (!instance) instance = new ProductMongoDao();

    return instance;
  }

  async getProductWithLimitAndOffset(limit, offset) {
    // Patron repository?
    try {
      const crudeData = await this.collection.find().skip(offset).limit(limit);
      const response = crudeData.map((product) => {
        const currencies = {
          usdPrice: getCurrencyPrice(product.price, "USD"),
          arsPrice: getCurrencyPrice(product.price, "ARS"),
          uyuPrice: getCurrencyPrice(product.price, "UYU"),
        };

        return new ProductDTO(product, currencies);
      });

      return response;
    } catch (err) {
      console.log("Error", err);
    }
  }
}
