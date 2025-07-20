import { model, Schema } from "mongoose";
import { IUser } from "../../interfaces/user.interface";

const userSchema=new Schema<IUser>({
    firstName:{
        type:String,
        required:true,
        trim:true,
        minlength:4,
        maxlength:10
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
     email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    age:{
      type:Number,
      required:true,
      min:18,
      max:60

    },
    password:{
        type:String,
        required:true,
       
    },
    role:{
        type:String,
        uppercase:true,
        enum:['user','admin','USER','ADMIN'],
        default:'user'
    }

})

export const User=model("User",userSchema)