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