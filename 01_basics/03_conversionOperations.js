//************************* Conversions *****************************************

//conversion into numbers
let score=49
console.log(typeof score);
console.log(typeof(score));
let s="49"
console.log(typeof s);
let valueInNumber = Number(s);
console.log(typeof valueInNumber);

let t="ygyei38"
let valueInNumber2 = Number(t); // will convert in number
console.log(typeof valueInNumber2); // type will show number
console.log(valueInNumber2); //but nan

let score2=null
let num=Number(score2)
console.log( num);


//"33" =>33
//"33abc" =>NaN
//undefined =>nan                      // --------- still typeof will give number-------------------------//
// true =>1
//false => 0
//null =>0


//conversion to booleans
let isLoggedIn=1 
let booleanIsLoggedIn=Boolean(isLoggedIn); //1 - true   0 - false 
console.log(booleanIsLoggedIn);
let isLoggedIn2=""
let booleanIsLoggedIn2=Boolean(isLoggedIn2); //"abc" - true   "" - false 
console.log(booleanIsLoggedIn2);


//1 - true
//0 - false
//"" - false
// "ankit" - true


// Conversion to strings
let randomnum=33
let stringnum=String(randomnum)
console.log(stringnum + " " + typeof stringnum);


//**************************************************** OPERATIONS ******************************************************

let value=10
let negvalue=-value
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**5);
console.log(2/3);
console.log(2%2);

let str1="Ankit "
let str2="Raj"
let str3=str1+str2
console.log(str3);


//done do like this
console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(+true);
console.log(+false);
console.log(+"");
console.log(+"wuwe");


//prefix postfix
let gameCounter=100;
console.log(++gameCounter)
console.log(gameCounter++)
console.log(gameCounter);