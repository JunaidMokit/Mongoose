import  express, { Request, Response }  from "express";

import { User } from "../models/user.model";
export const userRoutes=express.Router()

userRoutes.post('/create-user',async(req:Request,res:Response)=>{
    const body=req.body;
    // const myNote=new Note({
    //     title:"Learning Mongoose",
    //     content:"I am learning mongoose"

    // })
    // await myNote.save()

    const  user=await User.create(body)
    res.status(201).json({
        success:true,
        message:"Note created successfully",
         user
    })

})
userRoutes.get('/',async(req:Request,res:Response)=>{
    

   const  user=await User.find()
    res.status(201).json({
        success:true,
        message:"Note created successfully",
         user
    })

})

userRoutes.get('/user/:userId',async(req:Request,res:Response)=>{
    
   const userId=req.params.noteId;
   const  user=await User.findById(userId)
    res.status(201).json({
        success:true,
        message:"All Note Show successfully",
        user
    })

})

userRoutes.patch('/user/:userId',async(req:Request,res:Response)=>{
    
   const userId=req.params.noteId;
   const updatedBody=req.body;
   const  user=await User.findByIdAndUpdate(userId,updatedBody,{new:true})

  
    res.status(201).json({
        success:true,
        message:"Note updated successfully",
        user
    })

})

userRoutes.delete('/user/:userId',async(req:Request,res:Response)=>{
    
   const userId=req.params.noteId;
   const updatedBody=req.body;
   const note=await User.findByIdAndDelete(userId)

  
    res.status(201).json({
        success:true,
        message:"Note Delete successfully",
        note
    })

})