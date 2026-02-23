import http from 'http';
import fs from 'fs';


const server = http.createServer((req,res)=>{
 if(req.url == "/" && req.method == "GET"){
  res.end("<H1>Home Page</H1>");
 }else if(req.url == "/senddata" && req.method == "POST"){
  let body = "";
  req.on("data",(chunk)=>{
      body += chunk;
  })
  req.on("end",()=>{
    console.log("Data recieved")
    fs.appendFile("userData.txt",body ,"utf-8",(err)=>{
      if(err){
        res.statusCode = 500;
        return res.end("Error to data saving")
      }
      res.statusCode = 201;
      res.end("Data Received Completely");
    });  
  });
 }else if(req.url == "/viewdata" && req.method == "GET"){
  
  fs.readFile("userData.txt", "utf-8",(err,data)=>{
    if(err){
      res.statusCode = 500;
      return res.end("data Not Recieve Successfully");
    }
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(data));
  });
 }else{
  res.statusCode = 404;
  res.end("Page is not found");
 }
})

server.listen(3005,()=>{
  console.log("server is running at port 3005");
})
