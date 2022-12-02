import createCar, { Status } from "./carCreateor";
const cars = [];
// model: string;
// year: number;
// brand: string;
// color: string;
// fullName: string;
// phone: string;
cars.push(createCar({
    model: "Corolla",
    year: 2015,
    brand: "Toyota",
    color: "Black",
    status: 0,
}, { fullName: "Pepe", phone: "231758182" }));
cars.push(createCar({ model: "Prius", year: 2017, brand: "Toyota", color: "Red", status: 1 }, { fullName: "Juan", phone: "231758182" }));
cars.push(createCar({
    model: "Amarok",
    year: 2019,
    brand: "Volkswagen",
    color: "White",
    status: 1,
}, { fullName: "Monica", phone: "231758182" }));
cars.push(createCar({
    model: "Gol",
    year: 2010,
    brand: "Volkswagen",
    color: "Grey",
    status: 0,
}, { fullName: "Carla", phone: "231758182" }));
console.log("------ Bienvenido a la concecionaria ------");
console.log("Estos son los autos que tenemos disponibles:");
cars.forEach((car) => {
    console.log(`
-----------------------------------
  Datos del auto:

    Modelo: ${car.model}
    Marca: ${car.brand}
    Año: ${car.year}
    Color: ${car.color}
    Estado: ${Status[car.status]}


  Datos del Vendedor:
    Nombre: ${car.owner.fullName}
    Celular: ${car.owner.phone}
-----------------------------------
  `);
});
