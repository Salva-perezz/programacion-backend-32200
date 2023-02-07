import parseArgs from "minimist";

const args = process.argv.slice(2);
const options = {
  alias: {
    u: "user",
    p: "password",
    d: "debug",
  },
  default: {
    user: "root",
    password: "root",
    debug: false,
  },
};
const argsMinimist = parseArgs(args, options);

console.log(argsMinimist);
