import { config } from "dotenv";
import { createTransport } from "nodemailer";

config();

const trasporter = createTransport({
    service: "gmail",
    port: 587,
    auth: {
        user: process.env.MAIL_ADMIN,
        pass: process.env.API_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false
    }
});

const sendMail = async (usuario, nombre, apellido, email, tel, direccion, edad) => {
    try {
        const mailOptions = {
            from: "ml.3012@gmail.com",
            to: process.env.MAIL_USER,
            subject: "Nuevo registro",
            html: `<h3 style="color: blue;">usuario: ${usuario}</h3>
            <h3 style="color: blue;">nombre: ${nombre}</h3>
            <h3 style="color: blue;">apellido: ${apellido}</h3>
            <h3 style="color: blue;">mail: ${email}</h3>
            <h3 style="color: blue;">tel: ${tel}</h3>
            <h3 style="color: blue;">direccion: ${direccion}</h3>
            <h3 style="color: blue;">edad: ${edad}</h3>`,
        };
        const info = await trasporter.sendMail(mailOptions);
        console.log(info);
    } catch (err) {
        console.log(err);
    }
}

export default sendMail;