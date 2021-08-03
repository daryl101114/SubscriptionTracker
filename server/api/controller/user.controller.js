const db = require('../../model/db.connect')
const User = db.users;

exports.create = (req,res) =>{
    //create users here
    if(!req.body.fname){
        res.status(400).send({message: "Content can't be empty"});
        return
    }
    //Store data in user object
    const user = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    // Save the object in database
    user.save(user)
    .then(data => {
        res.send(data)
    })
    .catch(err =>{
        res.status(500).send({
            message:
                err.message || "Some error occured while creating the user"
        })
    })
}