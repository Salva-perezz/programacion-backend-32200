import Response from "../lib/response.lib.js";
import { carService } from "../services/index.js";
import validationHelper from "../validations/validationHelper.js";

const createCar = async (req, res, next) => {
  try {
    validationHelper(req);
    const response = await carService.createCar(req.body);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const updateCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await carService.updateCar(req.body, id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const deleteCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await carService.deleteCar(id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const findAllCars = async (req, res, next) => {
  try {
    const response = await carService.findAllCars();

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const findCarById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await carService.findCarById(id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

export const carController = {
  createCar,
  updateCar,
  deleteCar,
  findAllCars,
  findCarById,
};
