import {writeData} from "./helper.js"
import http from "http";

const server = http.createServer((req,res)=>{
  if(req.url === '/register' && req.method =="POST"){
    const body = ""
    req.on("data",(chunk)=>{
      body += chunk.toString();
    })
    req.on("end",async ()=>{
      const userData = JSON.parse(body);
      const response = writeData("./registeredUser.json",userData)
      res.writeHead(200,{"Content-type":"application/json"});
      res.end(JSON.stringify(response));
    })
  }else{
    req.end("Registration REST API");
  }
})

const PORT = 6700;
server.listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT}`);
})