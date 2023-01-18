import { faker } from "@faker-js/faker";

const users = [];

faker.locale = "es";

const createUsers = (qty) => {
  for (let i = 1; i <= qty; i++) {
    users.push({
      id: users.length ? users.length + 1 : 1,
      name: faker.name.fullName(),
      email: faker.internet.email(),
      website: faker.internet.url(),
      picture: faker.internet.avatar(),
    });
  }

  return users;
};

const getUser = (id) => (id ? users[id - 1] : users);

const createUser = (mock) => {
  mock.id = users.length ? users.length + 1 : 1;

  users.push(mock);

  return users[users.length - 1];
};

const updateUser = (id, mockUpdated) => {
  const index = id - 1;

  users[index] = mockUpdated;

  return users[index];
};

const deleteUser = (id) => {
  const deletedUser = users[id - 1];

  users[id - 1] = null;

  return deletedUser;
};

export const fakerService = {
  createUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
