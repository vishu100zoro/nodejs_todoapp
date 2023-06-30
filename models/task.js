import mongoose from "mongoose";

const schema=new mongoose.Schema({
    tittle:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    isComplete:{
        type: Boolean,
        default:false,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    createdAt:{
        type:String,
        default: Date.now,
    }
})

export const Task = mongoose.model("Task",schema);