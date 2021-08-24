module.exports = app =>{
    const subscriptions = require("../controller/subscription.controller.js")
    const router = require('express').Router();

    router.post("/create", subscriptions.create);


    app.use('/api/subscriptions',router)

}