
const mySym=Symbol("key")
const obj={
    name:"Ankit Raj",
    [mySym]:"key",
    "an": 45678,
    email: "raazankit1502@gmail.com",
    reg:99,
    lastLogins:["monday","saturday"]
}
console.log(obj.email)
console.log(obj["reg"])
console.log(obj["an"]) //cant access by dot
console.log(obj[mySym])
console.log(typeof obj[mySym])

obj.email="abc@gmail.com"
console.log(obj.email)
console.log(obj)

//Object.freeze(obj)  //now cant chnge obj
obj.greeting=function(){
    console.log(`Hey ${this.name} i am func `);
}
obj.greeting()