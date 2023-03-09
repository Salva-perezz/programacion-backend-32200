import twilio from "twilio";

const accountSid = "ACfd7d00efd7324085d877314e7e2bbfe0";
const authToken = "24383bdfbd45bce799de55c2155a944a";

const client = twilio(accountSid, authToken);

const options = {
  body: "Como estas",
  from: "+15673473675",
  to: "+543425672867",
};

try {
  const message = await client.messages.create(options);

  console.log(message);
} catch (err) {
  console.log(err);
}
