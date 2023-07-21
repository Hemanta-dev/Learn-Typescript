
//2 interface
interface Tranction{
    payerAccountNumber:number;
    payeeAccountNumber:number;
}
interface bankAccount{
    accountNumber:number;
    accountHolder:string;
    balance:boolean;
    transctions:Tranction[];
}

const transctions:Tranction={
    payerAccountNumber:20,
    payeeAccountNumber:456,
}

const transctions2:Tranction={
    payerAccountNumber:20,
    payeeAccountNumber:458,
}
const BankAccount:bankAccount ={
    accountNumber:123,
    accountHolder:"Hemanta Adhikari",
    balance:true,
    transctions:[transctions2,transctions]
}  

//Extends Interfaces
interface Book{
    name:string;
    price:number;
}
interface EBook extends Book{
    fileName:string;
    format:string;

}
interface AudioBook extends EBook{
    duration:string;
}

const AudioBook : AudioBook={
    name:"Harry Poter",
    price:20,
    fileName:"haarryBook",
    format:"20.jpg",
    duration:"30sec",

}

//merging 

//it merge the two interface at once
interface Cook {
    name:string;
    class:string;
} 
interface Cook{
    roll:number;

}

const book : Cook ={
    name:"EMcee",
    class:"A",
    roll:20
}
