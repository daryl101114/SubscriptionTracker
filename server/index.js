let express = require('express')

let app = express()





app.get('/',(req,res) =>{
    res.send("HELLO WORLD")
})
//Start the server
let port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log("The server is started")
})

// Start the server with Node and express
    // connect to postgreSQL
