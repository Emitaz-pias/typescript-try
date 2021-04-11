let myNum = 50;
// myNum = "change it"
myNum = 565656;

// basic types 

let age:number = 43;
age = 4;
// we can't assing string type to number type
//age =""
// we can declare this way too
let yourAge:Number;
yourAge = 45;
// for assigning into const we have assing value instantly  cause there is no more assigning into const variable
// wrong wayfor const 

//const myName:string ;
// myName =Emi;

// right way

const myName:string="Emi";

// but no restriction is for let cause we can assing value to it when we want
let yourName:boolean;
yourName=true;

// function related simple discusion 
function add (num1:number , num2:number):number // this will define the value type of number 
{
return num1+num2
}
// we can't even set the value of that variable by which we are calling the function it is already been set by the type of return
const addCaller = add(2,4);
 // if we set type of a function to void it will only return undefined 
 const  doubleItAndConsole =() => void{

}
 // it will retunr automatically  it's type somethimes  and we can declare a function like this way and can set up value by another line like variable
let multiply =(x:number , y :number) :number=>
x*y
// something about array 
// if we define an array without declaring it's tpye,typescript will automaticlly detect the type of the array
const friendAge:Number[]=[3,4,5,6,8,9]
//similar as for strings
const friendName:string[]=["bolda","chikna","votka"]


// for object we have to declare all the properties and value types 
let myObj:{
    name:string
    age:number
}

myObj ={
    name:"miavai",
    age:4
}
// and we can't add extra properties too to the object
let yourObject:{
    name:string
    age:number
}
yourObject={
    name:"Minu",
    age:18
    // class :rich
}
// when we get error in ts it will not convert into js