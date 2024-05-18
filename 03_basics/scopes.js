let a = 100;
const b = 20;
var c = 30;

// Here everything is in global scope

if (true) {
    // whatever is under curly braces are in block scope
    let a = 10;  //This will give error if we do console.log(a) outside the local scope
    const b = 20; //This will give error if we do console.log(b) outside the local scope
    // var c = 300; //This won't give error
    // console.log(a)
}

// console.log(a);
// console.log(b);
// console.log(c);

// The scope that we have in our node environment is different from the scope that we have in the browser's inspect element

// Scopes in Nested Functions

// Child function will always have the values of parent functions
function one() {
    const username = "Siddharth2001";
    function two() {
        const website = "www.google.com";
        console.log(username);
    }
    console.log(website);
    two();
}
// one();

// Same incase of if else

if (true) {
    const username = "Siddharth2001";
    if (username === "Siddharth2001") {
        const website = " www.google.com";
        // console.log(username+website);
    }
    // console.log(website);  // give error
}

// console.log(username); // give error



// Interesting

addOne(5); // This won't give error
// Basic Function
function addOne(num) {
    return num + 1;
}

addTwo(5); // This will give error because we declare it like this
// Function Expression
const addTwo = function (num) {
    return num + 2;
}

