const names = ["Luis", "Lucía", "Juan", "Augusto", "Ana"];
const lastnames = ["Pieres", "Cacurri", "Bezzola", "Alberca", "Mei"];
const colors = ["rojo", "verde", "azul", "amarillo", "magenta"];

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getTestData = (req, res) => {
  const response = [];

  for (let i = 1; i <= 10; i++) {
    response.push({
      name: names[generateRandomNumber(0, names.length - 1)],
      lastname: lastnames[generateRandomNumber(0, lastnames.length - 1)],
      color: colors[generateRandomNumber(0, colors.length - 1)],
    });
  }

  res.json(response);
};

export const testController = { getTestData };
