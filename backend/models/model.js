const mongoose=require('mongoose')
var schema=mongoose.Schema(
    {
        email:{type:String,required:true,unique:true},
        name:{type:String,required:true,unique:true},
        data:[{dates:{type:String},
                data:{type:String}
            }
        ],
    },
    {
        timestamps:true    
    }
)
module.exports=mongoose.model("diaries",schema);