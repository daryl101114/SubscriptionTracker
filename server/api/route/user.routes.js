const passport = require("passport");

module.exports = app =>{
    const users = require("../controller/user.controller.js")
    var router = require('express').Router();

    //Create new User
    router.post("/", users.create);
    router.post("/login",passport.authenticate('local',{
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })
    );



    app.use('/api/users', router)
}