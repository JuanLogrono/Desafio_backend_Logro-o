const http = require("http")
const express = require("express");

const app= express();

const PORT = 8080

const server = app.listen(PORT,()=>{
    console.log(server.address().port)
})

app.get('/',(req,res)=>{
    res.send({mensaje:'hola mundo!'})
})