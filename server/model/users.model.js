const bcrypt = require('bcrypt')
module.exports = mongoose => {
    const User = mongoose.model(
        "user",
        mongoose.Schema({
            fname: String,
            lname: String,
            username: String,
            emails: String,
            password: String
        },
        {
            timestamps: true
        })
    )
    User.validatePassword = (password) =>{
            return bcrypt.compareSync(password, this.password);
    }
    return User
}