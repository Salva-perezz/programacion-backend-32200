import { carService } from "../services/index.js";

const createCar = async ({ carData }) => {
  try {
    const response = await carService.createCar(carData);

    return response;
  } catch (err) {
    console.log({ Error: err });

    throw "Error creating car";
  }
};

const updateCar = async ({ updateCarData, id }) => {
  try {
    const response = await carService.updateCar(updateCarData, id);

    return response;
  } catch (err) {
    console.log({ Error: err });

    throw "Error updating car";
  }
};

const deleteCar = async ({ id }) => {
  try {
    const response = await carService.deleteCar(id);

    return response;
  } catch (err) {
    console.log({ Error: err });

    throw "Error deleting car";
  }
};

const findAllCars = async () => {
  try {
    const response = await carService.findAllCars();

    return response;
  } catch (err) {
    console.log({ Error: err });

    throw "Error getting all cars";
  }
};

const findCarById = async ({ id }) => {
  try {
    const response = await carService.findCarById(id);

    return response;
  } catch (err) {
    console.log({ Error: err });

    throw "Error getting car by Id";
  }
};

export const carController = {
  createCar,
  updateCar,
  deleteCar,
  findAllCars,
  findCarById,
};
