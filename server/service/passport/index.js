const passport = require("passport");
const db = require('../../model/db.connect')
const User = db.users

passport.serializeUser((user, done)=>{//stores the user ID into a session
    // console.log(user.id)
    done(null, user.email)

}),passport.deserializeUser((email, done)=>{

    User.findOne({ email }).lean().exec((err,user)=>{
        // console.log(user)
        done(err, user);
    })
})

//import all strategy here
const SigninStrategy = require('./local.strategy')


//use strategy here
passport.use('local-signin', SigninStrategy)


module.exports = passport