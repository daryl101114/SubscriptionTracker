module.exports = app =>{
    const users = require("../controller/user.controller.js")
    var router = require('express').Router();

    //Create new User
    router.post("/", users.create);
    router.post("/login",users.login);



    app.use('/api/users', router)
}