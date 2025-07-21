import  express, { Request, Response }  from "express";

import { User } from "../models/user.model";
import z from "zod";
export const userRoutes=express.Router()


const createUserZodSchema=z.object(
    {
        firstName:z.string(),
        lastName:z.string(),
        age:z.number(),
        email:z.string(),
        password:z.string(),
        role:z.string().optional()

    }
)

userRoutes.post('/create-user',async(req:Request,res:Response)=>{
    
    try {
    // const body=await createUserZodSchema.parseAsync(req.body);
    // console.log(body,"zod body")

    const body=req.body;
    const  user=await User.create(body)

    res.status(201).json({
        success:true,
        message:"Note created successfully",
         user:user
    })
    } catch (error:any) {
        console.log(error)
        res.status(400).json({
        success:false,
        message:error.message,
        error
    })
    }

})


// userRoutes.post('/create-user',async(req:Request,res:Response)=>{
//     const body=req.body;
//     const  user=await User.create(body)
//     res.status(201).json({
//         success:true,
//         message:"Note created successfully",
//          user
//     })

// })
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