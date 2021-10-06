const db = require("../../model/db.connect");
const User = db.users;
const bcrypt = require("bcrypt");
var passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

exports.create = async (req, res) => {
  //check to see if fname is not null
  if (!req.body.fname) {
    res.status(400).send({ message: "Content can't be empty" });
  }
  // check to see if user exist
  let existingUser = await User.findOne({ email: req.body.email });

  if (existingUser) {
    res.status(400).send({ message: "User already exist" });
  } else {
    //Hash password using bcrypt
    const salt = await bcrypt.genSalt(10);

    const encrypt = await bcrypt.hash(req.body.password, salt);
    //Store data in user object
    const user = new User({
      fname: req.body.fname,
      lname: req.body.lname,
      username: req.body.username,
      email: req.body.email,
      password: encrypt,
    });
    // Save the object in database
    await user
      .save(user)

      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occured while creating the user",
        });
      });
  }
};

//Check for loggedIn user

exports.isLoggedIn = (req, res) => {
  if (!req.user) {
    res.status(401).send("Failed");
  }
  console.log("Authorized");
  res.status(200).send("Success");
};
