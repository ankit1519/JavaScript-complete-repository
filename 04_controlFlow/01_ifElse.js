/*if(true){
    //body
}*/

const isUserLoggedIn=true
if(isUserLoggedIn){
    console.log("Yes logged in");
}

//<, >, <=, >=, ==, !=, ===, !==

if(2=="2"){        // if dt is also imp.. we can use ===
    console.log("executed");
}
if(2==='2'){
    console.log("exec"); //will not executed
}

//if else
const temp=31
if(temp==31){
    console.log(`${temp} is 31`);
}else{
    console.log(`${temp} is less or more than 31`);
}

const balance=399;
if(balance==300) console.log("nice amount");
else if(balance>300) console.log("better");
else console.log("Best");


// && ||

const isLoggedIn=true
const debitCard=true
if(isLoggedIn && debitCard) console.log("Allow shopping");
