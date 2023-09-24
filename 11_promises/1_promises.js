const promiseOne=new Promise(function(resolve,reject){
    //do an async taskkkkkkkkkkkkkk
    setTimeout(function(){
        console.log("task complete");
        resolve()
    },1000)
    
})

promiseOne.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("task 2 complete");
        resolve()
    },1000)
}).then(function(){
    console.log("task2 resolved");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        const supposeFromDB={username:"Ankit Raj",email:"raazankit1502@gmail.com"}
        resolve(supposeFromDB)
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            const supposeFromDB={username:"Ankit Raj",email:"raazankit1502@gmail.com"}
            resolve(supposeFromDB)
        }else{
            reject('error: something went wrong');
        }
    },1000)
})

promiseFour.then(function(user){
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(err){
   console.log(err);
}).finally(function(){
    console.log("the promise is either resolved or rejected");
})

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            const supposeFromDB={username:"JS",password:"123"}
            resolve(supposeFromDB)
        }else{
            reject('error: JS went wrong');
        }
    },1000)
})

async function consumedFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumedFive()

/*async function getAllUsers(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json()
        console.log(data);
    }catch(error){
        console.log("E: ",error)
    }
}
getAllUsers()*/

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((err)=>console.log(err))
