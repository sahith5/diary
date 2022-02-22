const express=require("express");
const app=express();
app.listen(3000,function()
{
    console.log("app staerted");
})

app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/frontend/login.html");
})
app.use(express.static(__dirname+"/frontend/images"));

app.get("/write",function(req,res)
{
    res.sendFile(__dirname+"/frontend/write.html");
})
