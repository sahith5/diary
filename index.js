const express=require("express");
const mongoose=require("mongoose");
const app=express();
const port=process.env.PORT|| 3000;
const path=require('path');


const dbconnet=require("./backend/libs/dbconnectlib");
const model=require('./backend/models/model')
const loginlib=require("./backend/libs/loginlib");
const write=require('./backend/libs/write');
const { json } = require("express/lib/response");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



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




app.post('/login',function(req,res)
{
   // console.log("call landed");
    loginlib.login(req.body,function(response)
    {
    if(response.success)
    {
        res.json({success:true,user:response.user});
    }
    else
    {
        res.json({success:false,error:response.error});
    }
    
    }
    )
})


app.post("/write",function(req,res)
{
    console.log("call landed");
    //console.log(req.body);
    res.send(req.body);
    write.write(req.body,function(response)
    { 

         res.send("addaed");
    })


})

app.get("/diaries/:name",function(req,res)
{
    console.log("successfully landed om diaries")
    console.log(req.params.name)
    var name=req.params.name;
    var data1={name:name};
    write.getdiaries(data1,function(data)
    {
        console.log(data);
        console.log(data.length)
        var diaries={
            data:data
        }
        console.log(diaries);
        res.json(diaries);

    
    })
})









