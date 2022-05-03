const db = require("../../model/db.connect");
const User = db.users;
const bcrypt = require("bcrypt");
const JWT = require('jsonwebtoken')
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
//Login
exports.login = async (req, res) => {
  const user = await User.findOne({ "email": req.body.email }).then(async (record) => {
    //validate password
    const isValidPassword = await bcrypt.compare(req.body.password, record.password);
    if (isValidPassword) {
      const jwt_token = JWT.sign(req.body, process.env.TOKEN_SECRET, { expiresIn: '1800s' })
      res.status(200).cookie('access_token', jwt_token, { expires: new Date(Date.now() + 8 * 3600000) }).send({ data: jwt_token, user: req.body.email })
    } else {
      res.status(403).send({ message: "The user login credentials doesn't match" })
    }
  })
}
//logout
exports.logout = async (req, res) => {

}


//Check for loggedIn user
exports.isLoggedIn = (req, res) => {
  if (!req.user) {
    res.status(401).send("Failed");
  }
  console.log("Authorized");
  res.status(200).send("Success");
};
