function sayMyName(){
    console.log("Ankit");
}
sayMyName()

//Add two nums
function add(number1,number2){                   //number1 , number2 are parameters
    console.log(number1+number2);
}
add(3,5) //pass agrs

function addTwoNum(number1,number2){                   
    return number1+number2;
    //unreachable
}
const ans=addTwoNum(3,5) //pass agrs
console.log(ans);

function loginUserMessage(username){
    if(username===undefined) return `please enter username`
     return `${username} just logged in`;
}
console.log(loginUserMessage("Ankit")) // if no value passed.. passes undefined as args


//default
function loginUserMessage(username="Sam"){
    if(username===undefined) return `please enter username`//no need
     return `${username} just logged in`;
}
console.log(loginUserMessage())


//shopping cartt type -------> use of rest operator ---> use ...
//in cart we cant determine how much total number can be.. so we can use rest operator
function calculateCartPrice(...num){
    return num
}
console.log(calculateCartPrice(100,200,499)) //returns array
function calculateCartPrice(val1,val2,...num){
    return num
}
console.log(calculateCartPrice(100,200,499,1000)) //here 100 goes in val 1 200 in val2 and rest in array as num


//paass obj as arg
const myObj={
    username:"Ankit",
    price:199
}

function handleObj(anyObj){
    console.log(`username is ${anyObj.username}`);
}
handleObj(myObj)

//pass array as arg
function returnSecValue(getArr){
    return getArr[1]
}
console.log(returnSecValue([1,2,3,4,5]));