import NewDaoFactory from "../classes/NewsDAOFactory.js";
import config from "../config/config.js";

const DAO = NewDaoFactory.getClient(config.database);

export default class NewController {
  async getNews() {
    try {
      const response = await DAO.getAll();

      res.json(response);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }

  async create(req, res) {
    try {
      await DAO.create(req.body);

      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
}
