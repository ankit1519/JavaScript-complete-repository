const arr=[1,2,3,4,5]

for (const val of arr) {
    console.log(val);
}
const greetings="Hello World!"
for (const greets of greetings) {
    console.log(greets);
}

//Map ->ordered and unique valued
const map=new Map()
map.set('In',"India")
map.set('USA',"united States of America")
map.set('fr',"France")
console.log(map);

for(const [key,value] of map){
    console.log(key+' ->'+value);
}

const myObj={
    'game1':'pubg',
    'game2':'bgmi'
}
//for of can't iterate object