const express = require('express')
// const cookieSession = require('cookie-session')
const cookieSession = require('cookie-session')
const db = require('./model/db.connect');
const cors = require('cors')
// const passport = require('passport')
const passport = require('./service/passport/index')
const bodyParser = require("body-parser");
const flash = require('connect-flash')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(flash());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors())
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
  }));
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
  }))
app.use(passport.initialize());
app.use(passport.session());

app.get('/',(req,res) =>{
    
    const email = req.user
    res.json({
        message: "Hello World"
    })
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

//Initialize routes
require('./api/route/user.routes')(app)
require('./api/route/subscription.routes')(app)

//Start the server
let port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log("The server is started", port)
})