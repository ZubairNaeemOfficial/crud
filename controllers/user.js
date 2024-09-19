
import usermodal from "../models/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
// register api 

export const registerUser=async(req,res)=>{
try {
  let userdata=req.body
  let isEmailExisted= await usermodal.findOne({email:userdata.email});
  if(isEmailExisted){
    return res.status(400).json({message:"Email already exists"})
  }
  const hashedPassword=await bcrypt.hash(userdata.password,10);
  userdata.password=hashedPassword
  const User=await usermodal.create(userdata);
 return res.json({message:"User created successfully",User});

} catch (error) {
  res.status(500).json(error.message)  
}
}

//login api with jwt
export const loginUser=async(req,res)=>{
  try {
    // data from  body
    let userdata=req.body;
    let user=await usermodal.findOne({email:userdata.email});
    // if user not existed 
    if(!user){
      return res.status(400).json({message:"Invalid email or password"})
    }
    const isValidPassword=await bcrypt.compare(userdata.password,user.password);
    if(!isValidPassword){
      return res.status(400).json({message:"password not matched"})
    }
    //token generation by jwt
    const token=await jwt.sign({id:user.id,role:user.role},process.env.PRIVATE_KEY,{expiresIn:"5m"});
     //cookies
     res.cookie("jwt",token,{httpOnly:true,secure:true,maxAge:5*60*60*24})
    return res.status(200).json({success:true,message:"logged in successfully",userdata,token:token,})

  }catch(error){
    res.status(500).json(error.message)

  }
}

//logout api 
export const logoutUser=async(req,res)=>{
  try {
    res.clearCookie("jwt");
    return res.status(200).json({message :"logged out successfully"})
  }catch(error){
return res.status(500).json(error.message)
  }
}