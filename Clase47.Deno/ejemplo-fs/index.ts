await Deno.writeTextFile("test.txt", "Hola como\nEstan");

const fileContent = await Deno.readTextFile("./test.txt");

console.log(fileContent);
