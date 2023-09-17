const name="Ankit"
const repo=30
console.log(name+": "+repo)  //dont use
console.log(`My name is ${name} and my repo count is: ${repo}`)

//another way to declare
const game=new String('Ankit Raj')
//gives much methods

console.log(game[0]);
console.log(game.__proto__)
console.log(game.length)
console.log(game.toUpperCase())
console.log(game.charAt(2))
console.log(game.indexOf('t'))

const newStr=game.substring(0,4) //dnt flw -ve index
console.log(newStr)

const anotherString=game.slice(2,-4)
console.log(anotherString)

//trim
const newString="                    Akanksha             "
console.log(newString)
console.log(newString.trim())
console.log(newString.trimEnd())
console.log(newString.trimStart())

//replace
const url="https://ankit%20raj.com"
console.log(url.replace("%20","-"));

console.log(url.includes("ankit"))
console.log(url.includes("abc"))
console.log(url.split("%20")) //char or string