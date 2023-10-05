const express=require('express')
const dotenv=require('dotenv')
const bodyParser=require("body-parser")
const app = express();
const userRoutes=require('./routes/user')
const mongoose=require('./config/connection')
dotenv.config()

let port= process.env.PORT || 8080;
app.use(bodyParser.json())
app.use(express.static("Public"));
app.use('/user', userRoutes)

app.listen(port, "localhost" ,(req, res)=>{
    console.log(`server starting at : http://localhost:${port}`)
})

