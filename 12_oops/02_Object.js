//function behaving as object

function multiply(num){
    return num*5
}
multiply.power=2
console.log(multiply(5));
console.log(multiply.power);
console.log(multiply.prototype);


function user(username,price){
    this.username=username
    this.price=price
}
user.prototype.increment=function(){
    this.price++;
}
user.prototype.pr=function(){
    console.log(`price is ${this.price}`);
}
const chai=new user("chai",10)
const coffee=new user("coffee",25)
chai.pr()