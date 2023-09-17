console.log(2>1);
console.log(2<1);
console.log("2">1);
console.log("02">1);


//confusion
//avoid these
console.log("null");
console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log(null===0);


//avoid these
console.log("undef");
console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);

console.log(2=="2"); //true
console.log(2==="2");//false