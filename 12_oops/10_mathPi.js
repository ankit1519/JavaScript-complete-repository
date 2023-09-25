//Object.PI=4
//console.log(Math.PI);

//const dis=Object.getOwnPropertyDescriptor(Math,"PI")
//console.log((dis)); //writable is disabled


const chai={
    name:"gingerTea",
    price:999,
    isAvail:true,
    fun:function(){
        console.log('hahahahahahahaha');
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

chai.name="tea"
console.log(chai.name); //no change

for(let [key, value] of Object.entries(chai)){
    if(typeof value !='function')
    console.log(`${key} -> ${value}`);
}