const passport = require("passport");
const db = require("../../model/db.connect");
const User = db.users;
// const Auth0Strategy = require()

passport.serializeUser((user, done) => {
  //stores the user ID into a session
  // console.log(user.id)
  done(null, user);
}),
  passport.deserializeUser((email, done) => {
    User.findOne({ email })
      .lean()
      .exec((err, user) => {
        // console.log(user)
        done(err, user);
      });
  });

//import all strategy here
const SigninStrategy = require("./auth0.strategy");

//use strategy here
passport.use(SigninStrategy);

module.exports = passport;
