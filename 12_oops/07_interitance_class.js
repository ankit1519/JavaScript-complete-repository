class User{
    constructor(username){
        this.username=username
    }
}
class Teacher extends User{
    constructor (username, email, password){
        super(username)
        this.email=email
        this.password=password
        
    }

    addCourse(){
        console.log(`new course added by ${this.username}`);
    }
}

const sikshak=new Teacher("Ankit","raazankit1502@gmail.com","123")
sikshak.addCourse()
const newUser=new User("Ankit")
console.log(sikshak===newUser);
console.log(sikshak instanceof User);
console.log(sikshak instanceof Teacher);
console.log(newUser instanceof Teacher);
console.log(newUser instanceof User);