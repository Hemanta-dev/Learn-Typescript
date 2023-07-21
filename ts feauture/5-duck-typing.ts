// duck typing or structural typing

interface ICredential{
    userName:string;
    password:string;
    isApproved:Boolean;

}

function LoginIn(credential:ICredential):Boolean{
    console.log(credential);
    return true;
}

const userIn ={
    userName:"hemanta",
    password:"123",
    isApproved:true,
}

LoginIn(userIn);


//another complex way including the function into the interface 

interface Auth{
    username:string;
    password:string;
    //if we return null we use the void method
    //login(username:string,password:string):void;
    login(username:string, password:string):Boolean;
}

const userAuth={
    username:"Hemanta",
    password:"567",
    login(username:string,password:string){
        return true;
        //void is used if we ruturn nothing in this
    }
}
