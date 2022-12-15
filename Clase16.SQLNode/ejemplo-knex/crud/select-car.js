import database from "../db/index.js";

const selectCars = async () => {
  try {
    const carsFromDb = await database.from("car").select("*");

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

selectCars();
