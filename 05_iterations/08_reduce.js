//accuulator, initialValue, currentValue

const nums=[1,2,3,4,5]
const total=nums.reduce((acc,curr)=> acc+curr,0)
console.log(total);

const shoppingCart=[
    {
        course:"Java",
        price:999
    },
    {
        course:"Python",
        price:199
    },
    {
        course:"Mobile dev",
        price:1999
    }
]

const totalPrice=shoppingCart.reduce((acc,curr)=>acc+curr.price,0)
console.log(totalPrice);