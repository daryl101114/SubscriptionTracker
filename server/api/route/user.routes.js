const passport = require("passport");


module.exports = app =>{
    const users = require("../controller/user.controller.js")
    var router = require('express').Router();

    //Create new User
    router.post("/", users.create);
    router.post("/login",passport.authenticate('local',{
        // successRedirect: 'http://localhost:5000/',
        // failureRedirect: 'http://localhost:3000/login',
        // failureFlash: false
    })
    );



    app.use('/api/users', router)
}