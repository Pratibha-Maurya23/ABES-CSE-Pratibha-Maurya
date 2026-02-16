import http from 'http';
import os,{ arch, freemem, platform } from 'os';
import fs from 'fs';
import { json } from 'stream/consumers';

let body = "";
// let data = [];

const server = http.createServer((req,res)=>{
 if(req.url == "/" && req.method == "GET"){
  res.end("<H1>Home Page</H1>");
 }else if(req.url == "/contact" && req.method == "GET"){
  res.end("<H1>Contact Page</H1>");
 }else if(req.url == "/system" && req.method == "GET"){
  const sysData = {
    platform:os.platform(),
    arch:os.arch(),
    cpu:os.cpus(),
    cpuLength:os.cpus().length,
    totalRam :(os.totalmem()/1024**3).toFixed(2),
    freemem:(os.freemem()/1024**3).toFixed(2)
  }
  res.end("<H1>System Info</H1><br>"+JSON.stringify(sysData));
 }else if(req.url == "/senddata" && req.method == "POST"){
  req.on("data",(chunk)=>{
      body += chunk;
  })
  req.on("end",()=>{
    console.log("Data recieved")
    fs.appendFileSync("data.txt", body, { encoding: "utf-8" });
    res.statusCode = 201;
res.end("Data Received Completely");
    
  })
 }else if(req.url == "/viewdata" && req.method == "GET"){
  res.setHeader("Content-Type","application/json");
  const data = fs.readFileSync("data.txt", "utf-8");
  res.end(JSON.stringify(data));
 
 }else{
  res.statusCode = 404;
  res.end("Page is not found");
 }

})

server.listen(3005,()=>{
  console.log("server is running at port 3005");
})
