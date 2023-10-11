const express=require('express')
const dotenv=require('dotenv')
const bodyParser=require("body-parser")
const app = express();
const userRoutes=require('./routes/user')
const userRoutes1=require('./routes/data')
const loginSystem=require('./routes/loginsystem')
const mongoose=require('./config/connection');

dotenv.config()

let port= process.env.PORT || 8080;
app.use(bodyParser.json())
app.use(express.static("Public"));
app.use('/user', userRoutes)
app.use('/check', userRoutes1)
app.use('/loginsystem', loginSystem)
app.listen(port, "localhost" ,(req, res)=>{
    console.log(`server starting at : http://localhost:${port}`)
})

