import { carDao } from "../daos/index.js";

const createCar = async (createCarRequest) => {
  try {
    const createdCar = await carDao.createCar(createCarRequest);

    return createdCar;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const updateCar = async (updateCarRequest, id) => {
  try {
    const existingCar = await carDao.findCarById(id);

    if (!existingCar) {
      throw {
        message: "The Car you want to update does not exist",
        status: 400,
      };
    }

    await carDao.updateCar(id, updateCarRequest);

    return await carDao.findCarById(id);
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const deleteCar = async (id) => {
  try {
    const existingCar = await carDao.findCarById(id);

    if (!existingCar) {
      throw {
        message: "The Car you want to delete does not exist",
        status: 400,
      };
    }

    await carDao.deleteCar(id);

    return existingCar;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findAllCars = async () => {
  try {
    const cars = await carDao.findAllCars();

    return cars;
  } catch (err) {
    console.log(err);
  }
};

const findCarById = async (id) => {
  try {
    const car = await carDao.findCarById(id);

    if (!car) {
      throw {
        message: "The Car you want to create already exists",
        status: 404,
      };
    }

    return car;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

export const carService = {
  createCar,
  updateCar,
  deleteCar,
  findAllCars,
  findCarById,
};
