import { Car } from "../models/index.js";

const createCar = async (createCarRequest) => {
  try {
    const createdCar = await Car.create(createCarRequest);

    return createdCar;
  } catch (err) {
    console.log(err);
  }
};

const updateCar = async (id, updateCarRequest) => {
  try {
    const updatedCar = await Car.updateOne({ _id: id }, updateCarRequest);

    return updatedCar;
  } catch (err) {
    console.log(err);
  }
};

const deleteCar = async (id) => {
  try {
    const deletedCar = await Car.deleteOne({ _id: id });

    return deletedCar;
  } catch (err) {
    console.log(err);
  }
};

const findAllCars = async () => {
  try {
    const cars = await Car.find();

    return cars;
  } catch (err) {
    console.log(err);
  }
};

const findCarById = async (id) => {
  try {
    const car = await Car.findById(id);

    return car;
  } catch (err) {
    console.log(err);
  }
};

const findCarByFilter = async (filters) => {
  try {
    const car = await Car.findOne(filters);

    return car;
  } catch (err) {
    console.log(err);
  }
};

export const carDao = {
  createCar,
  updateCar,
  deleteCar,
  findAllCars,
  findCarById,
  findCarByFilter,
};
