const user={
    userName:"Ankit Raj",
    price:99,
    welcome:function(){
        console.log(`${this.userName}, Welcome to website`);
       // console.log(this); //this tLKS about currrent context
    }
    
}

//user.welcome()
//user.userName='ank'
//user.welcome()
//console.log(this); //current context empty. in broweser console --->> window obj

function kulharChai(){
    let uname="Ankit"
    console.log(this.uname); //context works in obj only
}
//kulharChai()


const anotherF=function(){
    let uname="Ankit"
   // console.log(this.uname); //context works in obj only
}
//anotherF()


//arrow function
const arrowFun=()=>{
    //let uname="Ankit"
    console.log(this); //context works in obj only
}
//arrowFun();



//more about arrow function
const add=(num1,num2)=>{
    return num1+num2;
}
console.log(add(2,3))

const addNow=(num1,num2)=> num1+num2  // 1 line fat arrow
console.log(addNow(2,5))

//fat arrow 1 line with obj.. we must wrap in parenthesis
const un=()=>({usern:"Ankit"})
console.log(un());