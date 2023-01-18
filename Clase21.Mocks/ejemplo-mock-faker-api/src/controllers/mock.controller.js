import { fakerService } from "../services/faker.service.js";

const populateUsers = (req, res) => {
  const quantity = req.query.cant ? Number(req.query.cant) : 50;
  const response = fakerService.createUsers(quantity);

  res.json(response);
};

const getUser = (req, res) => {
  const id = req.params.id ? Number(req.params.id) : null;

  const response = fakerService.getUser(id);

  res.json(response);
};

const createUser = (req, res) => {
  const response = fakerService.createUser(req.body);

  res.json(response);
};

const updateUser = (req, res) => {
  const id = Number(req.params.id);

  const response = fakerService.updateUser(id, req.body);

  res.json(response);
};

const deleteUser = (req, res) => {
  const id = Number(req.params.id);

  const response = fakerService.deleteUser(id);

  res.json(response);
};

export const mockController = {
  populateUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
