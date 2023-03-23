import Pet from "../models/pet.model.js";

const getPets = async (req, res) => {
  try {
    const response = await Pet.find();

    res.json(response);
  } catch (err) {
    console.log(err);

    res.json({ message: "Internal server error" });
  }
};

export const petController = { getPets };
