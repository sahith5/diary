const mongoose=require('mongoose');
const model =require('../models/model');



module.exports={
    login:function(obj,cb)
    {
        var name=obj.name;
        var mail=obj.mail;

        var response={success:true,user:"user"};

        model.find({name:name},function(err,datax)
        {


            // console.log(datax);

            if(datax.length==1)
            {

               
                  response.success=true;
                   response.user=datax[0].name;

                return cb(response);
            }
            else
            {
                model.create({name:name,email:mail},function(err,data)
                {
                    // console.log(data);
                    response.success=true;
                    response.user=data.name;


                })
                
            }
        })
    }
}