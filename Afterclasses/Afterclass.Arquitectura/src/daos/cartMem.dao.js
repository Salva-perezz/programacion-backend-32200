import MemDao from "./mem.dao.js";

let instance;

export class CartMemDao extends MemDao {
  constructor() {
    super();
  }

  static getInstance() {
    if (!instance) instance = new CartMongoDao();

    return instance;
  }
}
