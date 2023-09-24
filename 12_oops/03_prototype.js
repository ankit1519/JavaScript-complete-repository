
let uuname=["Ankit",'Raj']
let user={
    uname:"Ankit",
    pass:123,
    msg:function(){
        console.log(`${this.uname} logged in`);
    }
}


//in Object trying to inject new prototype method named ankit
Object.prototype.ankit=function(){
    console.log("Ankit is there in all object");
}
// as user is object lets see if it has method as ankit or not
user.ankit()

// as obj is super prototype of array and string. lets check in array uuname if it has method as ankit or not
uuname.ankit()          //yeah

//now do reverse... give method to array chk on obj

Array.prototype.akankska=function(){
    console.log('HI akanksha');
}

uuname.akankska()
//user.akankska()        no method to obj

String.prototype.trueLength=function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
let myname="Ankit             "
myname.trueLength();
