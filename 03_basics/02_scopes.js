var a=400
if(true){
    var a=30
    const b=234;
    let c=22;
}

//var has global scope , let const has block scope
console.log(a)

let x=700
if(true){
    let x=21
    console.log("inner: " ,x);
}
console.log(x);

//scopes in functions -- hoisting

//1. in this we can calll function before definition
console.log(myF(5));
function myF(num){
    return num+1
}

//2. we can'r call before
const fun=function(num){
    return num+1
}
console.log(fun(33));