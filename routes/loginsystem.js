const express=require("express");
const router=express.Router();
const userController=require('../controllers/loginsystem');


// creating routes user controllers  

router.post("/signup", userController.SignupUser)
router.post("/signin" ,userController.Loginuser)


module.exports=router;