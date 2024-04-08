const express = require('express');

const app = express();

app.get("/api",(req,res)=>{
    res.json({
      name:"Aditya",
      email:"keepItSecreat@gmail.com",
      password:"keepItSecreat"
    });
})