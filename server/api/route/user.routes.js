const passport = require("passport");
require('dotenv').config()


module.exports = app =>{
    const users = require("../controller/user.controller.js")
    var router = require('express').Router();

    //Create new User
    router.post("/", users.create);

    // router.get("/isLoggedIn",users.isLoggedIn)

    router.get("/login", passport.authenticate("auth0",{
        scope: "openid email profile"
    }),
    (req, res)=>{
        res.redirect("/")
    }
    );

    router.get("/callback", (req,res,next)=>{
        passport.authenticate("auth0", (err, user, info) => {
            if (err) {
              return next(err);
            }
            if (!user) {
              return res.redirect("/login");
            }
            req.logIn(user, (err) => {
              if (err) {
                return next(err);
              }
              const returnTo = req.session.returnTo;
              delete req.session.returnTo;
              res.redirect(returnTo || "/");
            });
          })(req, res, next);
    });
    // router.post('/login', (req, res, next)=>{

    //     passport.authenticate('local-signin', (error, user, info)=>{

    //         if(error){

    //             res.send(500).json({

    //                 message: error || "Oops, Something happend",

    //             });

    //         }

    //         // console.log("It works")

    //         req.logIn(user,(error)=>{

    //             if(error){

    //                 return res.status(500).json({

    //                     message: error || "Something happened",
                        
    //                 })

    //             }
    //             user.isAuthenticated = true;

    //             // console.log(user.isAuthenticated)

    //             console.log(user + user.isAuthenticated)
                
    //             // return res.json(req.session.passport)
    //             // return res.send()

    //             return res.json(req.session.passport)

    //         })

    //     })(req, res, next)

    // })



    app.use('/api/users', router)
}