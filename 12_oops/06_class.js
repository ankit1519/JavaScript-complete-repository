//after ES6
class User{
    constructor(username , email,password){
        this.username=username;
        this.email=email
        this.password=password
    }

    //method
    encryptPass(){
        return `${this.password}abc`
    }
    capUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const ankit=new User("Ankit","raazankit1502@gmail.com",123)
console.log(ankit.encryptPass());

console.log(ankit.capUsername());