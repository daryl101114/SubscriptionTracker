const passport = require("passport");
require("dotenv").config();

module.exports = (app) => {
  const users = require("../controller/user.controller.js");
  var router = require("express").Router();

  //Create new User
  router.post("/", users.create);

  // router.get("/isLoggedIn",users.isLoggedIn)

  router.get(
    "/login",
    passport.authenticate("auth0", {
      scope: "openid email profile",

    }),
    (req, res) => {
      res.redirect("/");
    }
  );

  router.get("/callback", (req, res, next) => {
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
        // console.log(returnTo)
        delete req.session.returnTo;
        res.redirect(returnTo || "/");
      });
    })(req, res, next);
  });

  router.get("/logout", (req, res, next) => {
    try {
      req.logOut();
      return res.status(200);
      console.log("logging out");
    } catch (error) {
      console.log(error);
    }
    req, res, next;
  });

  app.use("/api/users", router);
};
