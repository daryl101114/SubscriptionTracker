const passport = require("passport");


module.exports = app =>{
    const users = require("../controller/user.controller.js")
    var router = require('express').Router();

    //Create new User
    router.post("/", users.create);
    // router.post("/login",passport.authenticate('local',{
    //     // successRedirect: '/',
    //     // failureRedirect: 'http://localhost:3000/login',
    //     failureFlash: true
    // }),(req,res)=>{
    //     res.redirect('/')
    // }
    // );

    router.post('/login', (req, res, next)=>{

        passport.authenticate('local-signin', (error, user, info)=>{
            if(error){
                res.send(500).json({
                    message: error || "Oops, Something happend",
                });
            }
            console.log("It works")
            return res.json(user);
        })(req, res, next)
    })



    app.use('/api/users', router)
}