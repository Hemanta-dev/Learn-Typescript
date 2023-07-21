//1 type alias => used for custom type
/***inbuilt type in typescript are number ,string ,arr[],boolean*/
type User ={
    name: string;
    age: number; 
    address?:string;
}



// function Login(userData:User):void{

// }

function Login(userData:User):User{
    return userData;
}
const user: User ={
    name:"Hemanta",
    age:22,

}
console.log(user);
// console.log(Login({name:"Hemanta",age:22}))

type ID = number;
const email: ID =5;
