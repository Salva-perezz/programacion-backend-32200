import yargs from "yargs";

const args = yargs(process.argv.slice(2))
  .alias({
    m: "modo",
    p: "puerto",
    d: "debug",
  })
  .default({
    modo: "prod",
    puerto: 0,
    debug: false,
  }).argv;

console.log({
  modo: args.modo,
  puerto: args.puerto,
  debug: args.debug,
  otros: args._,
});
