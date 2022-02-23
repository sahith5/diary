const express=require("express");
const mongoose=require("mongoose");
const app=express();
const port=process.env.PORT|| 3000;
const path=require('path');


const dbconnet=require("./backend/libs/dbconnectlib");



app.listen(port,function()
{
    console.log("app staerted");
})

 dbconnet.connect;


app.get("/",function(req,res)
{
    res.sendFile(path.join(__dirname+"/frontend/login.html"));
})
app.use(express.static(__dirname+"/frontend/images"));

app.get("/write",function(req,res)
{ 
    res.sendFile(path.join(__dirname+"/frontend/write.html"));
})



