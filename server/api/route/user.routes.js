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
            // console.log("It works")
            req.logIn(user,(error)=>{

                if(error){

                    return res.status(500).json({
                        message: error || "Something happened",
                    })

                }
                user.isAuthenticated = true;
                // console.log(user.isAuthenticated)
                console.log(user + user.isAuthenticated)
                //later don't send the user password to the client
                return res.json(req.session.passport)
            })
        })(req, res, next)
    })

    router.get("/logout", (req,res,next)=>{
        try {
            req.logOut();
            return res.status(200)
            console.log("logging out")
        } catch (error) {
            console.log(error)
        }
        (req,res,next)
    })


    app.use('/api/users', router)
}