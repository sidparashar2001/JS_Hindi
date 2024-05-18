function sayMyName() {
    console.log("S");
    console.log("I");
    console.log("D");
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("T");
    console.log("H");
}

// sayMyName();

// When we create the definition of function and the input that we are taking are called as parameters (number1,number2)
function addTwoNumbers(number1, number2) {
    let result = number1 + number2;
    return result;
    // console.log("Siddharth"); The lines written after return; will not be executed
}

const result = addTwoNumbers(1, 1); // Here 1,1 are arguments
// console.log(result);

function loginUserName(username) {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in.`;
}

// console.log(loginUserName("Siddharth"));

// If you want to pass multiple values in a function you  have to use rest operator

function calculateCartPrice(...num1) {
    return num1;
}
// num1 will return an array of all the elements passed

// console.log(calculateCartPrice(100, 200, 300, 400));

function calculateCartPrice(var1, var2, ...num1) {
    return num1;
}

// 100 will be assigned to var1 and 200 will be assigned to var2 and rest of the elements will be return as num1 array

// console.log(calculateCartPrice(100, 200, 300, 400));


const user = {
    name: "Siddharth",
    price: 7898
};

function handleObject(anyObject){
    return `${anyObject.name} your ordered price is ${anyObject.price}`;
}

console.log(handleObject(user));






