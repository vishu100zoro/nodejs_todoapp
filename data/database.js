import mongoose from "mongoose";



export const connectDB=()=>{

    mongoose.connect("mongodb://127.0.0.1:27017",{dbName:"backendapi"})
    .then(()=>console.log("connected to database"))
    .catch((e)=>console.log(e))
};
