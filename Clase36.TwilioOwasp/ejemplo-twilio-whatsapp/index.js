import twilio from "twilio";

const accountSid = "AC6fcf3c8785d9518903f0dc25179c651a";
const authToken = "9ea6063b60346adfe0c8e30a9ef73212";
const client = twilio(accountSid, authToken);

const options = {
  body: "Hola como estan",
  from: "whatsapp:+14155238886",
  mediaUrl: [
    "https://c8.alamy.com/compes/2f2g6yx/poznan-pol-feb-6-2021-ordenador-portatil-mostrando-el-logo-de-twilio-una-plataforma-de-comunicaciones-en-la-nube-americana-como-una-compania-de-servicio-cpaas-con-sede-en-2f2g6yx.jpg",
  ],
  to: "whatsapp:+5493425672867",
};

try {
  const message = await client.messages.create(options);

  console.log(message);
} catch (err) {
  console.log(err);
}
