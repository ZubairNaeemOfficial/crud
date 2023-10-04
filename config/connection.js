const mongoose=require("mongoose")


const Url="mongodb+srv://zubairrajpoot4241:U2dgBfsbYiA5KZ8@cluster0.ruq50qd.mongodb.net/"
mongoose.connect(Url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("db connected")
})

const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection failed"))

module.exports=mongoose;