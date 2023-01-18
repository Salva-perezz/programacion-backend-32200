import { faker } from "@faker-js/faker";

faker.locale = "es";

const getTestData = (req, res) => {
  const response = [];
  const qty = req.query.cant ? Number(req.query.cant) : 10;

  for (let i = 1; i <= qty; i++) {
    response.push({
      id: i,
      name: faker.name.firstName(),
      lastname: faker.name.lastName(),
      color: faker.color.human(),
    });
  }

  res.json(response);
};

export const testController = { getTestData };
