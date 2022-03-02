const { json } = require('express/lib/response');
const mongoose=require('mongoose');
const model =require('../models/model');


module.exports={

    write: async function(data,cb)
    {
        o=await model.findOne({name:data.name})

        o.data.push({dates:data.dates,data:data.data})
 
        o1=await model.updateOne({name:data.name},{$set:{data:o.data}})
        json.toString(o1)
        var response={success:true};
        return cb(response);
    },
    getdiaries: async function(data,cb)
    {
        o1=await model.find({name:data.name});
       
        return cb(o1[0].data);
    }
}
