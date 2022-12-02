class Persona {
  constructor(name, age, weight, height) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
  }
}

const salva = new Persona("Salvador", 21, 85, 190);

console.log(salva);

let sumar = (num1, num2) => {
  return num1 + num2;
};

console.log(sumar(2, 2));
