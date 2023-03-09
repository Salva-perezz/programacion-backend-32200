import { config } from "dotenv";
import { createTransport } from "nodemailer";

config();
const subject = process.argv[2];
const message = process.argv[3];
const attachment = process.argv[4];
const transporter = createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: "salvaxelement@gmail.com",
    pass: process.env.TPWD,
  },
});
const mailOtions = {
  from: "Servidor Node",
  to: "salvaxperex@gmail.com",
  subject,
  html: `<h1>Mensaje nuevo!</h1> </br> <p>${message}</p>`,
};

if (attachment) {
  mailOtions.attachments = [{ path: `./${attachment}` }];
}

try {
  const info = await transporter.sendMail(mailOtions);

  console.log(info);
} catch (err) {
  console.log(err);
}
