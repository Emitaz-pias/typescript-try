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
multiply=(x,y)=>x*y // here we cannot pass strings as paramitters
