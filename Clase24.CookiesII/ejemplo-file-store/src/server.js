import express from "express";
import session from "express-session";
import sessionFileStore from "session-file-store";

const app = express();
const FileStore = sessionFileStore(session);

app.use(
  session({
    secret: "coderhouse",
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      path: "./sessions",
      ttl: 60,
      retries: 0,
    }),
  })
);

app.get("/", (req, res) => {
  const { name } = req.query;

  if (name) req.session.user = name;

  res.send(`Hello ${req.session.user}`);
});

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
