const express = require('express');
const expressSession = require('express-session');
// const cookieSession = require('cookie-session');
const db = require('./model/db.connect');// const passport = require('passport')
const passport = require('./service/passport/index');
const bodyParser = require("body-parser");
const flash = require('connect-flash');
const cors = require('cors');
const app = express();
require("dotenv").config();

//Session Configuration
const session = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: false
  };

//MIDDLEWARES
app.use(expressSession(session));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: 'http://localhost:3001',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
  }));

// app.use(cookieSession({
//     name: "session",
//     secret: process.env.SESSION_SECRET
//   }))

app.use(passport.initialize());
app.use(passport.session());


if(app.get("env") === "production"){
    session.cookie.secure = true
};

app.get('/',(req,res) =>{
    
    // const email = req.user
    res.json({
        message: "Hello World"
    })
});

//Connect to the database
db.mongoose.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connected to the database");
}).catch((err)=>{
    console.log("Cannot connect to the database", err);
    process.exit();
});

//Initialize routes
require('./api/route/user.routes')(app);
require('./api/route/subscription.routes')(app);

//Start the server
let port = process.env.PORT || 7000
app.listen(port, ()=>{
    console.log("The server is started", port)
});