import database from "../db/index.js";

const deleteCar = async () => {
  try {
    await database.from("car").del();

    console.log("Cars deleted!");

    database.destroy();
  } catch (err) {
    console.log(err);
    database.destroy();
  }
};

deleteCar();
