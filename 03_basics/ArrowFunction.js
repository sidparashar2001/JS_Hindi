// This keyword refers to an object that takes the current context

/*
The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

*/

const user = {
    username: "Siddharth",
    age: 22,
    welcomeMessage: function () {
        // console.log(this.username); // u
        // console.log(this); // This will give the current context
    }
}

user.welcomeMessage();
user.username = "Sid";
user.welcomeMessage();

//console.log(this); // In node environment the current context globally will be an empty object but in browser the global object is window object so we'll get window object



function chai1() {
    let username = "Siddharth";
    // console.log(this); // This will give the current context of function that this holds
    // console.log(this.username) // This will give undefined because in functions it doesn't work like in object
}
chai1();

// Same with function expression also
const chai2 = function () {
    let username = "Siddharth";
    // console.log(this); // This will give the current context of function that this holds
    // console.log(this.username) // This will give undefined because in functions it doesn't work like in object
}
chai2();

// Arrow Function

const chai3 = () => {
    let username = "Siddharth";
    console.log(this); // In case of arrow function we'll get an empty object
    console.log(this.username); // This will give undefined because in functions it doesn't work like in object

}
// chai3();


// Decalrations of arrow function

// Basic Declaration or explicite return (Matlab return lagana pad rha h)
const addTwo1 = (num1, num2) => {
    return num1 + num2;
}
// console.log(addTwo1(2, 4));

// Implicit return Declaration - It means function assume that you don't need to write return statement because your statement is of one line

const addTwo2 = (num1, num2) => num1 + num2
// console.log(addTwo2(2, 4));

const addTwo3 = (num1, num2) => (num1 + num2)
// console.log(addTwo3(2, 4));


// Note: If you have used curly braces in arrow function then you need to use return statement and if you have used paranthesis then there is no need to write return statement 


const addTwo4 = () => { user: "siddharth" };
console.log(addTwo4()); // Object can't be return without paranthesis

// So we need to use paranthesis to return an object in arrow functions

const addTwo5 = () => ({ user: "siddharth" });
console.log(addTwo5());



