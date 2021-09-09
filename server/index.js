const express = require('express')
const session = require('express-session')
const db = require('./model/db.connect');
const cors = require('cors')
// const passport = require('passport')
const passport = require('./service/passport/index')
const bodyParser = require("body-parser");
const flash = require('connect-flash')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}))
app.use(flash());
app.use(passport.initialize());
// app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req,res) =>{
    res.send("HELLO WORLD")
})

//Connect to the database

db.mongoose.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connected to the database");
}).catch((err)=>{
    console.log("Cannot connect to the database", err);
    process.exit();
})

// console.log(cors(corsOptions))
app.use(cors())
//Initialize routes
require('./api/route/user.routes')(app)
require('./api/route/subscription.routes')(app)

//Start the server
let port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log("The server is started", port)
})