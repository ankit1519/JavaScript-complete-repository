function setUserName(username){
    this.username=username
    console.log("called");
}
function userData(username,email,password){
    this.email=email
    this.password=password
    setUserName.call(this,username) //jaise hi cll hua gayab........... reference hold krne k lliye thisssssssssssssss
}
const aPerson=new userData("Ankit Raj","raazankit1502@gmail.com",12345)
console.log(aPerson);