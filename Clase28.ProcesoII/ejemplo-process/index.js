const util = require("util");

process.on("uncaughtException", (error) => {
  console.log("Hubo un Error 🥹");
});

process.on("exit", (code) => {
  console.log(`Me fui con ${code}`);
});

console.log(`
Directorio Actual: ${process.cwd()}
ID del proceso (PID): ${process.pid}
Version Node: ${process.version}
Titulo del Proceso: ${process.title}
Sistema Operativo: ${process.platform}
Uso de memorio: ${util.inspect(process.memoryUsage(), {
  showHidden: false,
  depth: null,
  colors: true,
})}
ExecPath: ${process.execPath}
`);

process.on("beforeExit", (code) => {
  console.log("Me fui");
});

const miConsoleLog = (string) => {
  process.stdout.write(string + "\n");
};

miConsoleLog("Hola desde mi console log");

process.exit(3);
