import twilio from "twilio";

const accountSid = "ACfd7d00efd7324085d877314e7e2bbfe0";
const authToken = "49ec8abe9d03b30a8ba201bddf8dc97c";
const destinyNumber = process.argv[2];
const message = process.argv[3];

const client = twilio(accountSid, authToken);

const options = {
  body: message,
  from: "+15673473675",
  to: destinyNumber,
};

try {
  const message = await client.messages.create(options);

  console.log(message);
} catch (err) {
  console.log(err);
}
