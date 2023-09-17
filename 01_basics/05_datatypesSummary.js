//primitive
//-- always pass by value -- copy is passed
// 7 types- String, Number, Boolean, null, undefined, Symbol,BigInt

//Number
const score=100
const scoreValue=100.2

//Boolean
const isLoggedIn=false;

//Null
const outsideTemp=null;

//undif
let emailId;

//Symbol
const id=Symbol('123');
const id2=Symbol('123');
console.log(id==id2)
console.log(id)
console.log(id2)

//BigInt
const bigNum=18337383783n
console.log(bigNum)



//Non-primitive
//they are passed by reference
//Array, object, Functions

const heroes=["Shaktiman", "naagraj", "Doga"]
console.log(heroes)
console.log(heroes[1])

const myObj={
    name:"Ankit",
    age:22,
}
console.log(myObj);
//console.log(myObj[age])

const myFunc=function(){
    console.log("hello world");
}

myFunc();

//what datatypes
console.log(typeof BigNum)
console.log(typeof outsideTemp)

//in non primitive all return obj
console.log(typeof myFunc) //function object
console.log(typeof heroes)
console.log(typeof myObj)