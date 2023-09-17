const score=100;
console.log(score)

const balance=new Number(100)
console.log(balance)
console.log(balance.toString())
console.log(balance.toFixed(2)) //precision

const otherNumber=23.484894
console.log(otherNumber.toPrecision(3)); // counts all digit and round offfffff

const hundreds=10000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))

console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)

/****************Maths*************/
console.log(Math) //console will give detail
console.log(Math.abs(4));
console.log(Math.abs(-4));
console.log(Math.round(4.55));
console.log(Math.floor(23.44));
console.log(Math.ceil(23.44));
console.log(Math.pow(2,3));
console.log(Math.min(1,2,3,45,67,11));
console.log(Math.random());  //bw 0 to 1
console.log((Math.random()*10) +1);

//formula to keep in range
const max=6
const min=1
console.log(Math.floor((Math.random()*(max-min))+min))