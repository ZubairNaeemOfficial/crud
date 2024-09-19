import mongoose from "mongoose"

const todoSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    //role based user field
    role:{
        type:String,
        enum:["admin", "customer","superAdmin"],
        default:"customer",
    }
})

const user=mongoose.model("User",todoSchema)
export default user;



