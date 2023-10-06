const mongoose=require('mongoose')

const todoSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    testing:{
       data1:String,
       data2:String,
    },
   
    
})

const Testing=mongoose.model("DataTesting",todoSchema)
module.exports=Testing;