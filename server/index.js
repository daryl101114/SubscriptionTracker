let express = require('express')
const db = require('./model/db.connect');
const cors = require('cors')
let app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))



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

//Initialize routes
require('./api/route/user.routes')(app)


//Start the server
let port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log("The server is started", port)
})


