import http from 'http';
import os, { freemem, platform } from 'os';
let body="";
let data = [];
const server = http.createServer((req,res)=>{
//  const req.url = req.req.url;
 if(req.url=="/" && req.method=="GET"){
  res.end("<h1>Home Page</h1>");
 }else if(req.url=="/about" && req.method=="GET"){
  res.end("<h1>About Page</h1>");
 }else if(req.url=="/contact" && req.method=="GET"){
  res.end("<h1>Contact Page</h1>");
 }else if(req.url=="/senddata" && req.method=="POST"){
  req.on("data",(chunk)=>{
    body += chunk;
  })
  req.on("end",()=>{
    console.log(body,"data recived");
    data.push(body);
    body="";
    res.end(data+"data recived");
  })
 }else if(req.url=="/viewdata" && req.method=="GET"){
  const sysdata={
    platform:os.platform(),
    arch:os.arch(),
    cpu:os.cpus().length,
    totalRam:(os.totalmem()/1024**3).toFixed(2)+"GB",
    freemem:(os.freemem()/1024**3).toFixed(2)+"GB"
  }
  res.setHeader("Content-Type","application/json");
  // res.end(JSON.stringify(data));
  res.end(JSON.stringify(sysdata));
 }
 else {
  res.statusCode=404;
  res.end("<h1>Error Page</h1>");
 }
})
server.listen(4002,()=>{
  console.log("Server is running at 4002");
})