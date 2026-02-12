const express = require("express");
const app = express();
const PORT = 8080;
const cors = require('cors');

// Basic CORS fix
app.use(cors());


app.get('/about',(req,res)=>{
  const students =  [
    {
      id:1,
      name:"aditya",
      class:"10"
    },
    {
      id:2,
      name:"rohan",
      class:"11"
    },
    {
      id:3,
      name:"pooja",
      class:"8"
    },
    {
      id:4,
      name:"vikash",
      class:"12"
    },
    {
      id:5,
      name:"rakesh",
      class:"5"
    }
  ];
  res.send(students);
})

app.get('/contact',(req,res)=>{
  res.send("<h1>this is my first about contact</h1>");
})

app.listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT} `)
})