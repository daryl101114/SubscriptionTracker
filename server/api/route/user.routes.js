const passport = require("passport");


module.exports = app =>{
    const users = require("../controller/user.controller.js")
    var router = require('express').Router();

    //Create new User
    router.post("/", users.create);
    router.post("/login",passport.authenticate('local',{
        // successRedirect: '/',
        // failureRedirect: 'http://localhost:3000/login',
        failureFlash: true
    }),(req,res)=>{
        res.redirect('/')
    }
    );



    app.use('/api/users', router)
}