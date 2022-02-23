const mongoose=require('mongoose')
var schema=mongoose.Schema(
    {
        email:{type:String,required:true,unique:true},
        name:{type:String,required:true,unique:true},
        data:[{string:dates,
                string:data        
        }
        ],
        timestamps:true
    
    }
)