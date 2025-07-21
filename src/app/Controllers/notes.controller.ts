import  express, { Request, Response }  from "express";
import { Note } from "../models/notes.model";
export const notesRoutes=express.Router()

notesRoutes.post('/create-note',async(req:Request,res:Response)=>{
    const body=req.body;
    // const myNote=new Note({
    //     title:"Learning Mongoose",
    //     content:"I am learning mongoose"

    // })
    // await myNote.save()

    const note=await Note.create(body)
    res.status(201).json({
        success:true,
        message:"Note created successfully",
        note
    })

})
notesRoutes.get('/',async(req:Request,res:Response)=>{
    

   const notes=await Note.find().populate('userId','_id')
    res.status(201).json({
        success:true,
        message:"Note created successfully",
        notes
    })

})

notesRoutes.get('/notes/:noteId',async(req:Request,res:Response)=>{
    
   const noteId=req.params.noteId;
   const note=await Note.findById(noteId)
    res.status(201).json({
        success:true,
        message:"All Note Show successfully",
        note
    })

})

notesRoutes.patch('/notes/:noteId',async(req:Request,res:Response)=>{
    
   const noteId=req.params.noteId;
   const updatedBody=req.body;
   const note=await Note.findByIdAndUpdate(noteId,updatedBody,{new:true})

  
    res.status(201).json({
        success:true,
        message:"Note updated successfully",
        note
    })

})

notesRoutes.delete('/notes/:noteId',async(req:Request,res:Response)=>{
    
   const noteId=req.params.noteId;
   const updatedBody=req.body;
   const note=await Note.findByIdAndDelete(noteId)

  
    res.status(201).json({
        success:true,
        message:"Note Delete successfully",
        note
    })

})