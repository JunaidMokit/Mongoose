import { model, Schema } from "mongoose";
import { IAddresss, IUser } from "../../interfaces/user.interface";


export const addressSchema=new Schema<IAddresss>({
    city:{type:String},
        street:{type:String},
        zip:{type:Number}

},
{
 _id:false
})
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

export const User=model("User",userSchema)