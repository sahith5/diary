const express=require("express");
const app=express();
const port=process.env.PORT|| 3000;
const path=require('path');
app.listen(port,function()
{
    console.log("app staerted");
})

app.get("/",function(req,res)
{
    res.sendFile(path.join(__dirname+"/frontend/login.html"));
})
app.use(express.static(__dirname+"/frontend/images"));

app.get("/write",function(req,res)
{ 
    res.sendFile(path.join(__dirname+"/frontend/write.html"));
})
