// Creating Your own Server


const express = require('express'); // express is imported

const app = express();
const port = 4000;                     // default port

const path= require('path');

app.get("/", (req, res) => {
  res.send("<h1> HELLO WORLD </h1>");  
});

app.get("/about", (req, res) => {
  res.send("<h1> About Page </h1>");  
});

app.get("/contact", (req, res) => {
  res.send("<h1> Contact Page </h1>");  
});


app.listen(port,()=>{
  console.log(`Server is working on ${port}`);
});


/*
Full Stack App keliye CRUD(CREATE , READ, UPDATE , DELETE) Operations hona mandatory hai.
Lekin HTTPS server main crud nahi hota . Alternative is GET, POST,PUT, and DELETE.

GET ka matlab read karna , POST = Create , PUT= Update , DELETE = Delete.*/