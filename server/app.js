var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');


//MIDDLEWARES
var app = express();
     // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());
    // cross-origin
    app.use(cors); 


//START A SERVER
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})
