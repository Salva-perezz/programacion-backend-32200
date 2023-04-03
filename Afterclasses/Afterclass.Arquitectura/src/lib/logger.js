import pino from "pino";
import pinoMS from "pino-multi-stream";

// Crear un stream para los logs de consola
const consoleStream = pino.destination({ sync: false });

// Crear un stream para los logs de warning en el archivo warn.log
const warnStream = pino.destination({
    dest: "./logs/warn.log",
    sync: true,
});

// Crear un stream para los logs de error en el archivo error.log
const errorStream = pino.destination({
    dest: "./logs/error.log",
    sync: true,
});

// Crear una función que determine en qué stream escribir el log en función del nivel
const streams = pinoMS.multistream([
    { level: "info", stream: consoleStream },
    { level: "warn", stream: warnStream },
    { level: "error", stream: errorStream },
]);

// Crear configuración de logger
const logger = pino(
    {
        level: "info",
    },
    pino.multistream(streams)
);

export default logger;