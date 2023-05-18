const express = require("express");

const server =express();


server.use(express.json());

const myrouter = require("./router/router");



server.use("/api",myrouter)


server.get('/', (req,res,next)=>{
    res.send('Server is up and running!...')
})




module.exports = server;