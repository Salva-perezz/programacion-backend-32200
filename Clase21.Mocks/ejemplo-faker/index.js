import { faker } from "@faker-js/faker";

const person = {
  name: faker.name.firstName(),
  lastname: faker.name.lastName(),
  email: faker.internet.email(),
  job: faker.name.jobTitle(),
  addres: faker.address.streetAddress(),
};

console.log(person);
