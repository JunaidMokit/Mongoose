import { model, Model,Schema } from "mongoose";
import { IAddresss, IUser, UserInstanceMethods, UserStaticMethods } from "../../interfaces/user.interface";
import bcrypt from 'bcryptjs'
import { Note } from "./notes.model";

export const addressSchema=new Schema<IAddresss>({
    city:{type:String},
        street:{type:String},
        zip:{type:Number}

},
{
 _id:false
})
const userSchema=new Schema<IUser,UserStaticMethods,UserInstanceMethods>({
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
      min: [18, 'Must be at least 18, got {VALUE}'],
      max:60

    },
    password:{
        type:String,
        required:true,
       
    },
    role:{
        type:String,
        uppercase:true,
        enum:{
          values:['user','admin','USER','ADMIN'],
          message:"Role is not valid. got {VALUE} ROLE"
        },
        default:'user'
    },
    address: {
        type:addressSchema

    }

},{
    versionKey:false,
    timestamps:true
})

userSchema.method("hashpassword",async function(plainPassword:string){
   const password=await bcrypt.hash(plainPassword,10)
    //this.password=password;
    return password
  
})

userSchema.static("hashPassword",async function(plainPassword:string){
   const password=await bcrypt.hash(plainPassword,10)
    //this.password=password;
    return password
  
})

userSchema.post('save',function(doc){
    console.log(`${doc.email} has been saved`)
})

userSchema.post("findOneAndDelete",async function(doc){
   if(doc){
     console.log(doc)
     await Note.deleteMany({userId: doc._id})
   }
})

userSchema.pre("save",async function(){
    this.password=await bcrypt.hash(this.password,10)
})


export const User=model<IUser,UserStaticMethods>("User",userSchema)