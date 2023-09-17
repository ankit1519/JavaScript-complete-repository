//1970 onwards
let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(typeof myDate)

//create date -- months start with 0

let myCreatedDate=new Date(2023,0,17)
let myCreatedD=new Date(2023,0,17,5,3)
console.log(myCreatedDate.toDateString())
console.log(myCreatedD.toLocaleString())

//MM-DD-YYYY
let cd=new Date("01-14-2023")
console.log(cd.toDateString())


//timestMP
let myTime=Date.now()
console.log(myTime)  // milli sec from 1st jan 1973 from now

const c=new Date("01-14-2023")
console.log(cd.getTime())

//to sec
console.log(Math.floor(Date.now()/1000))


//methods
let nd=new Date();
console.log(nd.getMonth()+1)
console.log(nd.getDay()) //sunday=0