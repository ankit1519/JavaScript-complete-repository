//singelton obj =>using constructor
const tinderUser=new Object()
tinderUser.id="1234njfol"
tinderUser.name="annk"
tinderUser.isLoggedin=true;
console.log(tinderUser)


const regularUser={
    email:"abc@gmail.com",
    fullname:{
        userName:{
            firstName:"Ankit",
            lastname:"Raj"
        },
    },

}
console.log(regularUser.fullname.userName.firstName)

// we use ? to guarantee value is coming or not

const abj1={1:"Raj",2:"B"}
const abj2={4:"R",3:"Cw"}
const abj3={5:"ffB",56:"Cwww"}

const target={}
Object.assign(target,abj1,abj2,abj3)
console.log(target)

//but most fms just like array is spread operator
const target2={...abj1, ...abj2, ...abj3}
console.log(target2);

//from DB -- array of object
const user=[
    {
        id:"ji",
        name:"uhu",
    },
    {
        id:"ji",
        name:"uhu",
    },
    {
        id:"ji",
        name:"uhu",
    },
    {
        id:"ji",
        name:"uhu",
    }
]
console.log(user[1])

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) //alll key value pair in array
console.log(tinderUser.hasOwnProperty('isLoggedin')) // if ppty avail or not

 //----------------------------------------------------------------------------------------------

//object destructuring

const course={
    courseName:"JS in Hindi",
    price:"999",
    courseInstructor:"Ankit Raj"
}

const {courseInstructor}=course
console.log(courseInstructor); //no need to do course.courseInstructure now

//or,
     // we can rename too

const {price:p}=course
console.log(p);

//the above is called obj destructuring --- mostly used in react.js

//API comes in JSON format like:-
/*{
    "name":"Ankit",
    "class":"4",
    "Roll":393,
}*/

//API also comes in array format like:-
/*[
    {},
    {},
    {},
    ...
]*/
