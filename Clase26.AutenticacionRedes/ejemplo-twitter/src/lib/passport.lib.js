import { Strategy } from "passport-twitter";
import config from "../config/config.js";

const twitterStrategy = new Strategy(
  {
    consumerKey: config.clienId,
    consumerSecret: config.clienSecret,
  },
  (token, tokenSecret, userProfile, done) => {
    console.log(userProfile);
    return done(null, userProfile);
  }
);

export default twitterStrategy;
