import express from "express"
const router=express.Router();
import {loginUser, logoutUser, registerUser} from "../controllers/user.js"

router.post("/registerUser", registerUser)
router.post("/loginUser", loginUser)
router.post("/logout", logoutUser)


export default router;