const socket = io();
const messageForm = document.getElementById("messageForm");
const usernameInput = document.getElementById("usernameInput");
const messageInput = document.getElementById("messageInput");
const messagesPool = document.getElementById("messagesPool");

// Definimos la funcion que envia mensajes
const sendMessage = (messageInfo) => {
  // Emitiendo el evento "client:message" para mandar la informacion del mensaje al back a traves de websocket
  socket.emit("client:message", messageInfo);
};

const renderMessage = (messagesData) => {
  const html = messagesData.map((messageInfo) => {
    return `<div> <strong>${messageInfo.username}</strong> <em>${messageInfo.message}</em> </div>`;
  });
  console.log("Arreglo de string de mensajes", html);

  console.log("String de mensajes", html.join(" "));

  messagesPool.innerHTML = html.join(" ");
};

// Definimos la funcion submit handler, se ejecuta cuando se dispara el evento submit del form
const submitHandler = (event) => {
  //Ejecutamos la funcion preventDefault() para evitar que se recargue la pagina
  event.preventDefault();

  // Definimos la informacion del mensaje, es un obejto con una propiedad "username" y "message"
  const messageInfo = {
    username: usernameInput.value,
    message: messageInput.value,
  };

  // Ejecutamos la funcion sendMessage() que la encargada de enviar el mensaje al back pasandole como parametro la informacion del mensaje
  sendMessage(messageInfo);

  // Vaciamos el message input asi queda libre para escribir un nuevo mensaje
  messageInput.value = "";
  usernameInput.readOnly = true;
};

messageForm.addEventListener("submit", submitHandler);

socket.on("server:message", renderMessage);
