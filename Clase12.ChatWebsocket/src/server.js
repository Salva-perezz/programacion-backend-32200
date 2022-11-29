import express from "express";
import { Server as IOServer } from "socket.io";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const expressServer = app.listen(8080, () => {
  console.log("Server listening port 8080");
});
const io = new IOServer(expressServer);
const messages = [];

app.use(express.static(__dirname + "/public"));

// Nos ponemos a escuchar el evento por default de socket io que se ejecuta cuando se conecta un cliente
io.on("connection", (socket) => {
  // Logeamos el id del socket que se conecto
  console.log(`New connection, socket ID: ${socket.id}`);

  // Cuando se conecta un nuevo cliente le emitimos a ese cliente todos los mensajes que se mandaron hasta el momento
  socket.emit("server:message", messages);

  // Nos ponesmo a escuchar el evento "client:message" que recibe la info de un mensaje
  socket.on("client:message", (messageInfo) => {
    // Actualizamos nuestro arreglo de mensajes
    messages.push(messageInfo);

    // Emitimos a TODOS los sockets conectados el arreglo de mensajes actualizado
    io.emit("server:message", messages);
  });
});
