const bcrypt=require('bcrypt');
const jwt =require('jsonwebtoken')
const Logintest=require("../models/loginsystem");

 //sign-up Api or controller function

const SignupUser=async(req,res)=>{
try {
    const {username, email, password}=req.body;
    const hashpassword=await bcrypt.hash(password,10)
    const loginUser=new Logintest({username, email, password: hashpassword})
    await loginUser.save();
    res.status(201).json({message:"User created successfully"})
} catch (error) {
    res.status(500).json({error:error.message})
}
}
 
const Loginuser=async(req, res)=>{
    try {
        const {email, password}=req.body;
        const user=await Logintest.findOne({email});
        if(user && await bcrypt.compare(password,user.password)){
            const token =jwt.sign({userId:user.id, email:user.email}, process.env.PRIVATE_KEY, {expiresIn:"1hr"})
       res.status(200).json({token})
        }else{
            res.status(401).json({error:"invalid credentional"})
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports= {
    SignupUser,
    Loginuser
}