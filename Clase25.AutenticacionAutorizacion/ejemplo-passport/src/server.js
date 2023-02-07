import express from "express";
import exphbs from "express-handlebars";
import session from "express-session";
import mongoose from "mongoose";
import passport from "passport";
import { passportStrategies } from "./lib/passport.lib.js";
import invalidUrl from "./middleware/invalidUrl.middleware.js";
import { User } from "./models/user.model.js";
import router from "./routes/index.js";

const app = express();

app.engine(".hbs", exphbs({ extname: ".hbs", defaultLayout: "main.hbs" }));
app.set("view engine", ".hbs");

app.use(
  session({
    secret: "salva",
    resave: false,
    rolling: true,
    saveUninitialized: false,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

passport.use("login", passportStrategies.loginStrategy);
passport.use("register", passportStrategies.registerStrategy);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);

  return user;
});

app.use("/", router);

app.use(invalidUrl);

await mongoose.connect("mongodb://localhost:27017/passport");
console.log("Databe connected!");
app.listen(3000, () => {
  console.log("Server listening port 3000");
});
