const arr=["hbduhd", true,1,2,3,4,5]
arr.forEach(function(val){
   // console.log(val);
})

arr.forEach((val)=> console.log(val))

const prevFunc=(val)=> console.log(val);
arr.forEach(prevFunc)

//it brings more parameter than item - index and complete array
arr.forEach((val, index,arr)=> console.log(`Value at index ${index} of array ${arr} is : ${val}`))

arr.forEach((val, index)=> console.log(`Value at index ${index}  is : ${val}`))

const myCoding=[
    {
        lang:"Javas",
        langFile:".js"
    },
    {
        lang:"Java",
        langFile:".java"
    },
    {
        lang:"Python",
        langFile:".py"
    }
]
myCoding.forEach((value)=>{
    console.log(value.lang, "-> " ,value.langFile);
})