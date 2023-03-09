import { createTransport } from "nodemailer";

const subject = process.argv[2];
const message = process.argv[3];
const transporter = createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "sigrid.stokes13@ethereal.email",
    pass: "W8NhqWDFNyH5nKAFwp",
  },
});
const mailOtions = {
  from: "Servidor Node",
  to: "sigrid.stokes13@ethereal.email",
  subject,
  html: `<h1>Mensaje nuevo!</h1> </br> <p>${message}</p>`,
};

try {
  const info = await transporter.sendMail(mailOtions);

  console.log(info);
} catch (err) {
  console.log(err);
}
