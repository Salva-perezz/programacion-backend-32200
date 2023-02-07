// node index.js hola chau saludos

const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  console.log(`${i} ==> ${args[i]}`);
}
