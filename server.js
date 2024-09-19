
import express from "express";
import bodyparser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import { connectionDB } from "./config/connection.js";
import userRouter from "./routes/user.js"
import cookieParser from "cookie-parser";
dotenv.config()

const app = express()
//for connection
app.use(cors())
//for json data 
app.use(express.json());
// body parser for taking data from document or body

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())
// cookie parser

app.use(cookieParser())

app.use("/",userRouter)
connectionDB()
const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log("server created")
})



