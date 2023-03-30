import DAO from "../classes/DAO.class.js";

export default class NewsMemDao extends DAO {
  constructor() {
    super();
    this.collection = [];
  }

  getAll() {
    return this.collection;
  }

  create(newToCreate) {
    let newId;
    if (!this.colecction.length) {
      newId = 1;
    } else {
      newId = this.colecction[this.colecction.length - 1].id + 1;
    }

    const doc = { ...newToCreate, id: newId };
    this.colecction.push(doc);
    return doc;
  }
}
