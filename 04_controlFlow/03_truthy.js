const userEmail="ankit@gmail.com"
if(userEmail){
    console.log("got UE");
}else{
    console.log("didnt got UE");
}
//falsy - false, 0, null,undefined, -0, bigInt->0n, Nan, ""
//truthy - [], "0", 'false', " ", {}, function(){}
const umail=[]
if(umail.length===0) console.log("array is empty");

const emptyObj={}
if(Object.keys(emptyObj).length===0) console.log("object is empty");

//false == 0 - true   0=='' true       

// Nullish coalescing Operator  (??): null & undefined
          // for safety check so that null and undefined effect should be ignored
let val1=5??10
console.log(val1);
let val2=null??10
console.log(val2);


//ternary operator
//condition ? true: false
const tea=100;
tea>=100?console.log("less or eq to 100"): console.log("more than 100");