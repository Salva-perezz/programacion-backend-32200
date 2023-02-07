import yargs from "yargs";

const args = yargs(process.argv.slice(2))
  .alias({
    u: "user",
    p: "password",
    v: "vivo",
  })
  .default({
    user: "root",
    password: "root",
  })
  .boolean("vivo").argv;

console.log(args);
