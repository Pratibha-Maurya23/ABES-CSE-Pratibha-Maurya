import http from "http";
const port=5003;
const users = [];
let count = 0;
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url=="/users"&&method=="GET"){
        //res.end("List of user")
        res.end(JSON.stringify(users))
    }
    else if(url.startsWith("/users/")&&method=="GET"){
        const id=url.split("/")[2];
        const user=users.find(u=>u.id==id);
        if(!user){
            res.statusCode=400;
            console.log(`user id ${id} not found`)
            return res.end(`user id ${id} not found`)
        }
        //res.end("Search user")
        console.log(`user id ${id} found`)
        res.end(JSON.stringify(user))
    }
    else if(url.startsWith("/users/")&&method=="PUT"){
        const id=url.split("/")[2];
        const userIndex=users.findIndex(u=>u.id==id);
        let body=" ";
        req.on("data",(chunk)=>{
            body=body+chunk;
        })
        req.on("end",()=>{
        if(userIndex==-1){
            res.statusCode=400;
            console.log(`user id ${id}not found`)
            return res.end(`user id ${id}not found`)
        }
    const updatedata=JSON.parse(body);
    users[userIndex]={...users[userIndex],...updatedata};
    res.end(`user id ${id} updated successfully`)
    })
    }
    else if(url.startsWith("/users/")&&method=="DELETE"){
        const id=url.split("/")[2];
        const userIndex=users.findIndex(u=>u.id==id);
        if(userIndex==-1){
            res.statusCode=400;
            console.log(`user id ${id}not found`)
            return res.end(`user id ${id}not found`)
        }
        users.slices(userIndex,1);
        console.log(`user id ${id} not found`);
        return res.end(`user id ${id} not found`)

        //res.end("delete user")
    }
    else if(url=="/users"&&method=="POST"){
        let body=" ";
        req.on("data",(chunk)=>{
            body=body+chunk;
        })
        req.on("end",()=>{
            const data=JSON.parse(body);
            const newUser={
                id:count,
                name:data.name,
                email:data.email
            }
            count++;
            if(data.name==null && data.email==null){
                res.statusCode
            }
            users.push(newUser);
            res.statusCode=201;
            console.log(`user id ${newUser.id} created succesfully`)
            res.end(`user id ${newUser.id} created succesfully`)
        })
        //res.end("create user")
    }
    else{
        res.statusCode=404;
        res.end("Error page")
    }
})
server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})