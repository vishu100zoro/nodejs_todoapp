import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";


export const newTask=async(req,res)=>{
 try {
    const {tittle,description}=req.body;
   
    await Task.create({
     tittle,description,user:req.user,
    })
 
    res.status(201).json({
     success:true,
     message:"Task add Successfully",
    });
 } catch (error) {
    next(error)
 }

};


export const getMyTask=async(req,res)=>{
  try {
    const userid=req.user._id;
    const task=await Task.find({user:userid});
 
    res.status(200).json({
     success:true,
     task,
    });
 
  } catch (error) {
    next(error);
  }
}



export const updateTask=async(req,res,next)=>{
  try {
    const _id=req.params.id;
    //    console.log(_id);
           const task=await Task.findById(_id);
           if(!task) return  next(new ErrorHandler("task not found",404));
        //    console.log(task.isComplete);
          task.isComplete=!task.isComplete;
    
           await task.save();
        res.status(200).json({
         success:true,
         message:"task updated",
        });
  } catch (error) {
    next(error)
  }
 
 }


 export const deleteTask=async(req,res,next)=>{
   try {
    const task=await Task.findById(req.params.id);


    if(!task) return  next(new ErrorHandler("task not found",404));
    
  await task.deleteOne();
  res.status(200).json({
   success:true,
   message:"task updated",
  });
   } catch (error) {
    next(error)
   }
 
 }