import connectRedis from "connect-redis";
import express from "express";
import session from "express-session";
import { createClient } from "redis";

const app = express();
const client = createClient({
  legacyMode: true,
});
const RedisStore = connectRedis(session);

await client.connect();

app.use(
  session({
    secret: "coderhouse",
    resave: false,
    saveUninitialized: false,
    store: new RedisStore({
      host: "redis-11266.c93.us-east-1-3.ec2.cloud.redislabs.com",
      port: 11266,
      client,
      ttl: 60,
    }),
  })
);

app.get("/", (req, res) => {
  const { name } = req.query;

  if (name) req.session.user = name;

  res.send(`Hola ${req.session.user}`);
});

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
