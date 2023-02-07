import parseArgs from "minimist";

const options = {
  alias: {
    p: "puerto",
    d: "debug",
    m: "modo",
  },
  default: {
    puerto: 0,
    modo: "prod",
    debug: false,
  },
};
const args = process.argv.slice(2);
const minimistArgs = parseArgs(args, options);

console.log({
  modo: minimistArgs.modo,
  puerto: minimistArgs.puerto,
  debug: minimistArgs.debug,
  otros: minimistArgs._,
});

// node index.js 1 2 3 -m dev -p 8080 -d
// run | script |    ARGUMENTOS
