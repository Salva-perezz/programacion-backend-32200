import database from "../db/index.js";

const selectCarsWhereByYear = async (from, to) => {
  try {
    const carsFromDb = await database
      .from("car")
      .select("*")
      .where("year", ">=", from)
      .andWhere("year", "<=", to)
      .orderBy("brand", "asc");

    console.log("------------ AUTOS EN VENTA ------------");
    carsFromDb.forEach((car) => {
      console.log(`
            Marca: ${car.brand}
            Modelo: ${car.model}
            Año: ${car.year}
            Precio: ${car.price}
        `);
    });
    console.log("-----------------------------------------");

    database.destroy();
  } catch (err) {
    console.log(err);
    database.destroy();
  }
};

selectCarsWhereByYear(2016, 2021);
