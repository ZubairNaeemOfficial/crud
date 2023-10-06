const express=require("express");
const router=express.Router();
const userController=require('../controllers/user')


// creating routes user controllers  

router.post("/createuser", userController.createdata)
router.get("/getAllData", userController.getAlldata )
router.get("/getById/:id", userController.getById)
router.delete("/userdelete/:id", userController.deleteById)
router.put("/userupdate/:id", userController.updatingById)


module.exports=router;