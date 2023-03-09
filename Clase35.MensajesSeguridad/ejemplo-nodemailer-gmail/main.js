import { config } from "dotenv";
import { createTransport } from "nodemailer";

config();

const trasporter = createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: "salvaxelement@gmail.com",
    pass: process.env.TPWD,
  },
});

const mailOptions = {
  from: "Server Node",
  to: "salvaxperex@gmail.com",
  subject: "Hola",
  html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>',
  attachments: [{ path: "./foto.jpeg" }],
};

try {
  const info = await trasporter.sendMail(mailOptions);

  console.log(info);
} catch (err) {
  console.log(err);
}
