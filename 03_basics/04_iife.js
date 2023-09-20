//immediately invoked function expression
/*({

})() */
//named iife bcz it has name chaii
(function chai(){
    console.log('Db conn');
})();

//must put semi column so that another function can execute
((name)=>{
    console.log(`${name}'s DB conn 2`);
})('Ankit');

/*why iife?
      -to remove global scope variable pollution
      -to execute fun quickly
*/

//to end iife function execution must use semicolumn

