const express=require("express");
const router=express.Router();
const userController=require('../controllers/data')


// creating routes user controllers  


router.post("/datatesting", userController.Datatesting)

module.exports=router;