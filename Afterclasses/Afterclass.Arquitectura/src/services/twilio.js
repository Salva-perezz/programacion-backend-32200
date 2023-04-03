import twilio from "twilio";
import { config } from "dotenv";

config();

const sendMessage = async () => {
    try {
        const accountSid = process.env.ACCOUNT_TWILIO;
        const authToken = process.env.AUTHTOKEN_TWILIO;
        const client = twilio(accountSid, authToken);

        const options = {
            body: "Su pedido ha sido recibido y se encuentra en proceso",
            from: "whatsapp:+14155238886",
            to: "whatsapp:+5491170213089",
        };
        const message = await client.messages.create(options);

        console.log(message);
    } catch (err) {
        console.log(err);
    }
}

export default sendMessage;
