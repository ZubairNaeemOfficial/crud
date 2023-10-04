const Todo=require("../models/user")

const createdata=async(req , res)=>{
try {
    const {name, email, password}=req.body;
    const todo=new Todo({
      name,
      email,
      password,  
    })
    await todo.save()
    res.json(todo)
} catch (error) {
    res.status(500).json({error:error.message})
}
}

const getAlldata=async(req,)=>{
    try {
      const gettodos =await Todo.find({})
    res.json(gettodos)  
    } catch (error) {
       res.status(500).json({error:error.message}) 
    }
    
}
module.exports={
    createdata,
    getAlldata
}