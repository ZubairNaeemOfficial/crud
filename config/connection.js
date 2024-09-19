import mongoose from "mongoose"

const Url="mongodb+srv://haroonrana719:haroonrana719@cluster.u0awj.mongodb.net/"
export const connectionDB=()=>{
    try {
        mongoose.connect(Url).then(()=>{
            console.log("database connected")
        })
    } catch (error) {
      console.log(error.message)  
    }
}




