
module.exports = mongoose => {
    const User = mongoose.model(
        "user",
        mongoose.Schema({
            fname: String,
            lname: String,
            username: String,
            email: String,
            password: String
        },
        {
            timestamps: true
        })
    )
    return User
}