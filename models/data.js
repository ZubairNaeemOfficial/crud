const mongoose=require('mongoose')

const todoSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    testing:{
       data1:Number,
       data2:String,
       data3:Number,
       data4:String,
       data5:Number,
       data6:String,
       data7:Number,
       data8:String,
       
    },
    testing1:{
        data1:Number,
        data2:Number,
        innerdata:{
            inner:Number,
            innerdata:String
        },
     },
     testing2:{
        data1:Number,
        data2:String,
     }
   
    
})

const Testing=mongoose.model("DataTesting",todoSchema)
module.exports=Testing;