const socket = io();

const messageForm = document.getElementById("messageForm");
const usernameInput = document.getElementById("usernameInput");
const messageInput = document.getElementById("messageInput");
const messagesPool = document.getElementById("messagesPool");

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Agarramos el valor del mensaje y del username
  const message = messageInput.value;
  const username = usernameInput.value;

  // Emitimos el evento DESDE EL CLIENTE "client:message" mandandole al servidor la informacion del mensaje
  socket.emit("client:message", { username, message });
});

// Nos ponemos a escuchar el evento "server:message"
socket.on("server:messages", (messages) => {
  // Vaciamos el messagesPool para que los mensajes no se dupliquen
  messagesPool.innerHTML = "";

  // Iteramos sobre el arreglo de mensajes que nos llega y por aca uno le insertamos in li al messagesPool
  messages.forEach((message) => {
    messagesPool.innerHTML += `<li>${message.username}: ${message.message}</li>`;
  });
});
