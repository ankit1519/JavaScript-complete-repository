const user={
    username:"Ankit Raj"
}
const Teeacher={
    makeVideo:true
}
const TA={
    isAvail:false
}
const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TA
}
Teeacher.__proto__=user
console.log(TASupport.isAvail);
console.log(Teeacher.username);

//Modern syntax
Object.setPrototypeOf(TASupport,TA)  //same as line 13