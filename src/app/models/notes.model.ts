import { model, Schema } from "mongoose"
import { INotes } from "../../interfaces/notes.interface"

const noteSchema=new Schema<INotes>({
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
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},
{
    versionKey:false,
    timestamps:true
})

export const Note=model("Note",noteSchema)