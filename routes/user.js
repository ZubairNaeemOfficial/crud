const express=require("express");
const router=express.Router();
const userController=require('../controllers/user');
const authenticateWithToken = require("../middleware/usermiddleware");


router.post("/createuser", userController.createdata)
router.get("/getAllData",authenticateWithToken ,userController.getAlldata )
router.get("/getById/:id",authenticateWithToken ,userController.getById)
router.delete("/userdelete/:id", userController.deleteById)
router.put("/userupdate/:id", userController.updatingById)


module.exports=router;