import MemDao from "./mem.dao.js";

let instance;

export class ProductMemDao extends MemDao {
  constructor() {
    super();
  }

  static getInstance() {
    if (!instance) instance = new ProductMemDao();

    return instance;
  }
}
