import { createTransport } from "nodemailer";

const transporter = createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "ansel62@ethereal.email",
    pass: "EjPEuqjANQsGNgqtJZ",
  },
});

const mailOtions = {
  from: "Servidor Node",
  to: "ansel62@ethereal.email",
  subject: "Prueba Coderhouse",
  html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>',
};

try {
  const info = await transporter.sendMail(mailOtions);

  console.log(info);
} catch (err) {
  console.log(err);
}
