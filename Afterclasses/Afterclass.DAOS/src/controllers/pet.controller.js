import { Daos } from "../daos/index.js";
import { Pet as PetModel } from "../model/pet.model.js";

const Pet = new Daos.PetDao(PetModel);

const getAllPets = async (req, res) => {
  try {
    const response = await Pet.getAll();

    res.json(response);
  } catch (err) {
    throw new Error();
  }
};

const createPet = async (req, res) => {
  try {
    const response = await Pet.getAll();

    res.json(response);
  } catch (err) {
    throw new Error();
  }
};

export const petController = { getAllPets, createPet };
