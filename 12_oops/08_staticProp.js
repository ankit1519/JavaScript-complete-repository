class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username} `);
    }
   static createId(){
        return `${Math.round(Math.random()*1000000+1)}`
    }
}
const ankit=new User("Ankit")
//console.log(ankit.createId()); //staic prevents to access property
class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email;
    }
}

const teac=new Teacher("abcd","anc@gmail.com")
teac.logMe()
//console.log(teac.createId())      static prevents to access