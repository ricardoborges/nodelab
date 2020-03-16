const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, reqfreshToken, profile, done) => {
      console.log("access token: ", accessToken);
      console.log("reqfresh token: ", reqfreshToken);
      console.log("profile: ", profile);
    }
  )
);
