import Pet from "../models/pet.model.js";

const getPets = async (req, res) => {
  try {
    const response = await Pet.find();

    res.render("pets", { pets: response });
  } catch (err) {
    console.log(err);

    res.render("error", { message: "Iternal server error" });
  }
};

export const petController = { getPets };
