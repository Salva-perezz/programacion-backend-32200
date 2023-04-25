const generadorSaludo = (name: string): string => {
  return `Hola ${name}. ¿Como estas?`;
};

console.log(generadorSaludo("Pepe"));

const a = [1, 2, 3];
const b = [...a];

b[3] = 4;

console.log(a);

const a2 = { saludo: "Hola" };
const b2 = { ...a2 };

b2.saludo = "Chau";

console.log(a);
