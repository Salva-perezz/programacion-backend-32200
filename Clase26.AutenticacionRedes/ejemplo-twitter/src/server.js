import express, { json, urlencoded } from "express";
import expHbs from "express-handlebars";
import session from "express-session";
import passport from "passport";
import twitterStrategy from "./lib/passport.lib.js";
import router from "./routes/index.js";

const app = express();

app.use(
  session({
    secret: "coderhouse",
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      maxAge: 60000,
    },
  })
);
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.engine(".hbs", expHbs({ extname: ".hbs", defaultLayout: "main.hbs" }));
app.set("view engine", ".hbs");

passport.use(twitterStrategy);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use("/", router);

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
