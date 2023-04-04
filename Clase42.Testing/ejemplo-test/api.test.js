import { expect } from "chai";
import supertest from "supertest";
import generateUser from "./factories/userFactory.js";

let request;
let createdUser;
let getUser;

describe("Test over RESTFULL API", () => {
  before(() => {
    request = supertest("http://localhost:3000");
  });

  describe("- POST /api/user", async () => {
    const userToCreate = generateUser();

    it("Should response with 201 status code", async () => {
      const response = await request.post("/api/user").send(userToCreate);

      createdUser = response.body.data;

      expect(response.status).to.eql(201);
    });

    it("Response should have name, email and if properties", () => {
      expect(createdUser).to.keys("name", "email", "id");
    });

    it("Should return created user", () => {
      expect(createdUser.name).to.eql(userToCreate.name);
      expect(createdUser.email).to.eql(userToCreate.email);
    });
  });

  describe("- GET /api/user", async () => {
    it("Should return 200 status code", async () => {
      const response = await request
        .get("/api/user")
        .set({ userId: createdUser.id });

      getUser = response.body.data;

      expect(response.status).to.eql(200);
    });

    it("Response should have name, email and id properties", () => {
      expect(getUser).to.keys("name", "email", "id");
    });
  });

  describe("- GET Unknown", () => {
    it("Should return 404 status code", async () => {
      const response = await request.get("/asdasd");

      expect(response.status).to.eql(404);
    });
  });
});
