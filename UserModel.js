const mongoose=require('mongoose')

const userSchema=new mongoose.Schema(
    {
        Name:{
            type: String,
            required: true
          },
        Email:{
            type: String,
            required: true
          },
        Count:{
            type: Number
          }
    }
); 
module.exports=mongoose.model('User',userSchema);