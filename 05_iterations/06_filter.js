const coding=["js", "ruby", "java", "python","cpp"]
const values=coding.forEach((value)=>{
    return value
})
console.log(values); //values ->undefined     doesnt return anything
//for each and filter both takes callback

//filter
const arr=[1,2,3,4,5,6,7,8,9,10]
const nums=arr.filter((num)=>num>5)
const nums2=arr.filter((num)=>{
    return num<=4
})
console.log(nums);
console.log(nums2);