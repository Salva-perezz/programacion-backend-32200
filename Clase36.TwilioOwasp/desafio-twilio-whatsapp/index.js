import twilio from "twilio";

const accountSid = "AC6fcf3c8785d9518903f0dc25179c651a";
const authToken = "shhhh";
const client = twilio(accountSid, authToken);
const toNumber = process.argv[2];
const body = process.argv[3];

const options = {
  body,
  from: "whatsapp:+14155238886",
  to: `whatsapp:${toNumber}`,
};

try {
  const message = await client.messages.create(options);

  console.log(message);
} catch (err) {
  console.log(err);
}
