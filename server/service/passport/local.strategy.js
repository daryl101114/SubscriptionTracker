const LocalStrategy = require('passport-local').Strategy
const db = require('../../model/db.connect')
const User = db.users
const bcrypt = require('bcrypt')


const localStrategy = new LocalStrategy(

    async (username, password, done)=>{

    let user = await User.findOne({username: username});

    if(!user){
        
        return done(null, false, {message: 'Incorrect username'});
    }
    // Validate Password
    let isValidated = await bcrypt.compareSync(password, user.password)

    if(!isValidated){
        console.log("wrong pass")
        return done('email or password is not valid',null, false);
    }

    console.log(user)

    return done(null, user);
    
})



module.exports = localStrategy