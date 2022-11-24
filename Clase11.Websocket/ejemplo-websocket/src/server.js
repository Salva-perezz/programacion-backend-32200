import express from "express";
import { Server as IOServer } from "socket.io";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const messages = [];

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(3000, () => {
  console.log("Server listening port 30000");
});

const io = new IOServer(expressServer);

io.on("connection", (socket) => {
  console.log(`New client connection ${socket.id}`);

  // Emitimos los mensajes al cliente que se conecta
  socket.emit("server:messages", messages);

  // Nos ponemos a escuchar los mensajes que manden los clientes
  socket.on("client:message", (messageData) => {
    // Actualizamos nuestro arreglo de mensajes con el mensaje nuevo que llego
    messages.push(messageData);

    // Le emitimos la lista (Array) de mensajes actualizada a TODOS los clientes
    io.emit("server:messages", messages);
  });
});
