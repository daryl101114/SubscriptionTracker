const express = require('express')
require("dotenv").config();
const { PrismaClient } =require('@prisma/client') 
//connect database
const prisma = new PrismaClient()

const app = express()
const port = process.env.PORT

// app.post('/', async (req, res) => {
//     const users = await prisma.user.create({
//         data: {
//             fname: 'daryl',
//             lname:'lnname',
//             username: 'daryl101114',
//             email:'dadad@gmail.com',
//             password: '12341249'
//         }
//     })
//     console.log(users)
//     res.status(200).send(users)
//   })


//Starts the server
app.listen(port, ()=>{
    try{
        console.log(`This server is listening on port ${port}`)
    }catch(error){
        console.log(error)
    }
})