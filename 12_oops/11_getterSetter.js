class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(email){
        this._email=email
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(password){
        this._password=password
    }

}

const ank=new User("ankitannkiii@gmail.com",'abcd')
console.log(ank.password);
console.log(ank.email);
