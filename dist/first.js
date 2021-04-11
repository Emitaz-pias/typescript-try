"use strict";
let myNum = 50;
// myNum = "change it"
myNum = 565656;
// basic types 
let age = 43;
age = 4;
// we can't assing string type to number type
//age =""
// we can declare this way too
let yourAge;
yourAge = 45;
// for assigning into const we have assing value instantly  cause there is no more assigning into const variable
// wrong wayfor const 
//const myName:string ;
// myName =Emi;
// right way
const myName = "Emi";
// but no restriction is for let cause we can assing value to it when we want
let yourName;
yourName = true;
// function related simple discusion 
function add(num1, num2) {
    return num1 + num2;
}
// we can't even set the value of that variable by which we are calling the function it is already been set by the type of return
const addCaller = add(2, 4);
// if we set type of a function to void it will only return undefined 
const doubleItAndConsole = () => void {};
// it will retunr automatically  it's type somethimes  and we can declare a function like this way and can set up value by another line like variable
let multiply = (x, y) => x * y;
// something about array 
// if we define an array without declaring it's tpye,typescript will automaticlly detect the type of the array
const friendAge = [3, 4, 5, 6, 8, 9];
//similar as for strings
const friendName = ["bolda", "chikna", "votka"];
// for object we have to declare all the properties and value types 
let myObj;
myObj = {
    name: "miavai",
    age: 4
};
// and we can't add extra properties too to the object
let yourObject;
yourObject = {
    name: "Minu",
    age: 18
    // class :rich
};
// you have to fill all the properties with  right value type
const nasir = {
    name: "Naris",
    age: 2,
    club: "bcb",
    salary: 343,
    wife: "kana jolir er bou"
};
const kabila = {
    name: "kala kashem",
    age: 4,
    club: "kaultia",
    salary: 567,
    wife: "sokhina"
};
// complex paramitter type
function getBonus(player) {
    return player.salary * 0.1;
}
const output = getBonus(kabila);
