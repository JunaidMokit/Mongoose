import express,{Application,Request,Response} from 'express'
import { model, Schema } from 'mongoose';
const app:Application=express();

app.use(express.json())

const noteSchema=new Schema({
    title:{type:String, required:true, trim:true},
    content:{type:String,default:''},
    category:{
        type:String,
        enum:["personal","work","study","others"],
        default:"personal"
    },
    pinned:{
        type:Boolean,
        default:false
    },
    tags:{
        label:{type:String,required:true},
        color:{type:String,default:'gray'}
    }
},
{
    versionKey:false,
    timestamps:true
})

const Note=model("Note",noteSchema)

app.post('/notes/create-note',async(req:Request,res:Response)=>{
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
app.get('/notes',async(req:Request,res:Response)=>{
    

   const notes=await Note.find()
    res.status(201).json({
        success:true,
        message:"Note created successfully",
        notes
    })

})

app.get('/notes/:noteId',async(req:Request,res:Response)=>{
    
   const noteId=req.params.noteId;
   const note=await Note.findById(noteId)
    res.status(201).json({
        success:true,
        message:"All Note Show successfully",
        note
    })

})

app.patch('/notes/:noteId',async(req:Request,res:Response)=>{
    
   const noteId=req.params.noteId;
   const updatedBody=req.body;
   const note=await Note.findByIdAndUpdate(noteId,updatedBody,{new:true})

  
    res.status(201).json({
        success:true,
        message:"Note updated successfully",
        note
    })

})

app.delete('/notes/:noteId',async(req:Request,res:Response)=>{
    
   const noteId=req.params.noteId;
   const updatedBody=req.body;
   const note=await Note.findByIdAndDelete(noteId)

  
    res.status(201).json({
        success:true,
        message:"Note Delete successfully",
        note
    })

})

app.get('/',(req:Request,res:Response)=>{
    res.send('Welcome to Note App');

})
export default app;