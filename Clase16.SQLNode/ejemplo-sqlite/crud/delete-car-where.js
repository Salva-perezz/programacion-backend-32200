import database from "../db/index.js";

const deleteCarWhere = async () => {
  try {
    await database.from("car").del().where({ brand: "Volkswagen" });

    console.log("Cars deleted!");

    database.destroy();
  } catch (err) {
    console.log(err);
    database.destroy();
  }
};

deleteCarWhere();
