import passport from "passport";

const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: "1090567657656-grq6hde26if1bk7kr2979iffl6akf5fb.apps.googleusercontent.com",
      clientSecret: "TKeAT7oiJu2Z8blIQq_Iuvqh",
      callbackURL: "https://localhost:8080/login/auth/google/callback"
    },
    ((accessToken, refreshToken, profile, done) => {
      if (profile) {
        return done(err, true);
      }
      return done(null, false);
    })
  )
);

const googleAuth = passport.authenticate("google", {
  scope: ["https://www.googleapis.com/auth/plus.login"]
});

const googleAuthCallBack = passport.authenticate("google", (req, res) => {});

module.exports = Object.assign({}, { googleAuth, googleAuthCallBack });
