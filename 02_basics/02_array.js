const marvel=["Thor", "Ironman" , "Spiderman"]
const dc=["superman", "batman","flash"]
//marvel.push(dc) //takes array as single element    // operates in single array
const allHeroes=marvel.concat(dc);
console.log(allHeroes) // connect both array in new array


//spread opearator
const allnewHeroes=[...marvel,...dc]; // add multiple array at a time
console.log(allnewHeroes)

//flat
const anotherArray=[1,2,3,4,[5,6,7,8],6557,88,[39,66,335,65,[1,2,3,5,7]]]
console.log(anotherArray)
const usableArray=anotherArray.flat(Infinity)  // we can set any depth
console.log(usableArray)

console.log(Array.isArray(anotherArray))
console.log(Array.isArray("Ankit"))
console.log(Array.from("Ankit")) //conerts to array
console.log(Array.from({name:"Ankit"}))  //interesting =>cant understand create array through key or val
console.log(Array.of(100,200,300))