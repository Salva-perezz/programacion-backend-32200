import database from "../db/index.js";

const updateCar = async () => {
  try {
    const carsFromDb = await database.from("car").select("price", "id");

    await Promise.all(
      carsFromDb.map(async (car) => {
        await database
          .from("car")
          .where("id", "=", car.id)
          .update({ price: car.price / 2 });
      })
    );

    database.destroy();
  } catch (err) {
    console.log(err);

    database.destroy();
  }
};

updateCar();
