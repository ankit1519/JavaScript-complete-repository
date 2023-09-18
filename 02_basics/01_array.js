let arr=[1,2,3,45,'Ankit']
console.log(arr)
console.log(arr[0])

let arr2=new Array(1,23,54,55,34,"Ankkii")
console.log(arr2)
arr2.push(5555)
console.log(arr2)
arr2.pop()
console.log(arr2)


//unshift & shift
arr2.unshift(0) //add at start -- time consuming
console.log(arr2)
arr2.shift()
console.log(arr2)
console.log(arr2.includes(54))
console.log(arr2.indexOf(54))

//join chnges to string separated by comma
const arr2N=arr2.join();
console.log(arr2N);
console.log(typeof arr2N);


//slice and splice
const newArr=[0,1,2,3,4,5]
console.log("Before slice and Splice: ",newArr)

const nsl=newArr.slice(1,3) // 1 included 3 excluded  1 2 
console.log("sliced array gives copy: ",nsl)

console.log("after slice: ",newArr)


const nsp=newArr.splice(1,3) // both 1 and 3 included     -- 1 2 3
console.log("Spliced Array : ",nsp)
console.log("After Splice: ",newArr)

console.log(typeof newArr)
console.log(typeof nsl)
console.log(typeof nsp)

//slice - dont manipulate original array
//splice - manipulate original array
