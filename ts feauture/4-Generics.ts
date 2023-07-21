//4 generics

import { ResultType } from "@remix-run/router/dist/utils";

function GenericLog(arg:any){
    console.log(arg);
    return arg;
}

GenericLog([4,5]);

//but it isnot proper way to define type in ts we igonre ts at that momment 

//so we use generic to define our repitation function give type 

// so when we use the genric

function GenericLog1<T>(arg:T):T{
    console.log(arg);
    return arg;
}
console.log(GenericLog1([4,2]));


function GenericLog2<T>(arg:T):T{
    console.log(arg);
    return arg;
}
console.log(GenericLog2("Hemanta"));


//some complex example

interface HasAge{
    age:number;
}


function oldestAge (people:HasAge[]){
    return people.sort((a,b)=>b.age - a.age)[0];
}


const people =[{age:20},{age:30},{age:15}];


interface Player{
    name:string;
    age:number;
}

const player : Player[]=[{name:"Hemanta",age:12},{name:"Hari",age:15},{name:"Shyam",age:10}];
/*********************************
 * const newPlayer:Player=oldestAge(player);
 * newPlayer.name;
 * its solved but it shows conflicts and error occurs here
 */
//it can be solved through the assertion
//here is assertion or type casting means here it shows the oldAge(player)  is propertise of Player and asserted here so in name properties shows without any issue beacuse it player finds its perpoties through Player interface through assertions
const newPlayer = oldestAge(player) as Player;
newPlayer.name;


//above assertion is not a proper way to recognized the propertise so we use GENRICS 
// the proper solution is that given below

interface HasAge1{
    age:number;
}

function oldestAge1<T extends HasAge1>(people1: T[]):T{
    return people1.sort((a,b)=> b.age - a.age)[0];
}

const people1: HasAge1[] = [{age:20},{age:15},{age:10}]
oldestAge1(people1).age;

//simlarly to the player interface 

interface Player1 {
    name : string;
    age : number;
}

const player1 : Player1[] =[
    {name:"Hemanta",age:30},
    {name: "Shyam", age:20},
    {name:"Hari",age:15},
]

const comparePlayerAge = oldestAge1(player1);
comparePlayerAge.name;

//we take the more complex example for generics which we generally used in our real time project

interface IPost{
    title:string;
    id:string;
    date:number;
}
interface IAdd{
    title:string;
    id:string;
    name:string;
}

const addPostData =async(path:string):Promise<IPost[]>=>{
    const response = await fetch(`http://example.com${path}`);
    return response.json();
}

const postIt = async(data:string):Promise<IAdd[]>=> {
   const response = await fetch(`http://nepal.com${data}`);
   return response.json();
    
}


//anoynsome function
(async()=>{
    const posts = await addPostData("/posts");
    posts[0].date;
    //here date came from autocompletetion
    const adds = await postIt("/adds");
    adds[0].name;
    //here name is came from autocompletion of IAdd interface

})()

// so in this process there show the repetation function so we need to solved that issue if you are good programmer you should avaoid the repetation 
const addFetch = async<ResultType>(path :string): Promise<ResultType[]>=>{
    const response = await fetch(`http://nepaljung.com${path}`);
    return response.json();

}

(async()=>{
    const addUser = await addFetch<IAdd>("/users");
    addUser[0].name;
})