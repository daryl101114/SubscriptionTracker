const passport = require("passport");

//import all strategy here
const SigninStrategy = require('./local.strategy')


//use strategy here
passport.use('local-signin', SigninStrategy)


module.exports = passport