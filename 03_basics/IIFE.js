// IIFE = Immediately Invoked Function Expressions
// The function that executed immediately
// Sometimes from global scope the variables or declarations creates pollution in function to overcome that we use IIFE

// Synatx for IIFE

// Function definition         Execution call
// ()                              ()



// function chai() {
//     console.log("DB Conected");
// }
// chai();

// To execute the above function immediately 

// We also call it named IIFE
(function chai() {
    console.log("DB Conected");
})();

// IIFE as an arrow function or unnamed IIFE or simple IIFE
(() => {
    console.log("DB Conected Two");
})();

// The above function will give error if you don't put a semicolon after chai() function .
// Basically in IIFFE the function get invoked but it doesn't know where to end the context, that's why it's important to end the function with the semi colon

// Parameter IIFE
( (name) => {
    console.log(`Welcome ${name}`);
} )("Siddharth");
