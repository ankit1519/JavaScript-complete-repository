//object literals
const user={
    username:"Ankit Raj",
    loginCount:6,
    isSignedIn:true,
    getUserDetails: function(){
        console.log("user name is: ",this.username);
    }
}
user.getUserDetails();
console.log(this);                         // {}          in node


//new and constructor
function userr(username,loginCount,islogged){
    this.username=username;
    this.loginCount=loginCount;
    this.islogged=islogged
}

const user1=new userr("ankit",15,false);
const user2=new userr("Akanksha",19,true)
console.log(user1);
console.log(user2);

//new creates constructor fun