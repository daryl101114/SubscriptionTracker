const dbConfig = require("../config/db.config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.uri;
//MODELS
db.users = require("./users.model.js")(mongoose);
db.subscriptions = require("./subscription.model.js")(mongoose);

module.exports = db;
