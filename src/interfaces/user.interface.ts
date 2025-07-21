import { Model } from "mongoose"

export interface IAddresss{
    city:string,
    street:string,
    zip:number,
}
export interface IUser{
    firstName:string,
    lastName:string,
    email:string,
    age:number,
    password:string,
    role:'user'|'admin',
    address:IAddresss
}

export interface UserInstanceMethods{
    hashpassword(password:string):string
}

// export interface UserStaticMethods extends Model<IUser> {
//     hashPassword(password : string):string
// }

export interface UserStaticMethods extends Model<IUser> {
  hashPassword(password: string): Promise<string>;
}