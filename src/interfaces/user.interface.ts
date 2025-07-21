export interface IUser{
    firstName:string,
    lastName:string,
    email:string,
    age:number,
    password:string,
    role:'user'|'admin',
    address:{
        city:string,
        street:string,
        zip:number
    }
}