// In JavaScript, an object is a collection of key-value pairs, where each key is a string (or symbol) and each value can be of any data type, including other objects.



// If we decalre objects like literal then we don't form singleton and if constructor se banega then singleton banega
// Singleton
// Object.create();

// Object Literals - This is the way of decalring objects

//  You can't declare Symbol directly in objects. first declare it then use it
const mySym = Symbol("key1");

const jsUser = {
    name: "Siddharth",
    "full name": "Siddharth Parashar",// You can't access this property by jsUser.full name you have to use sqaure brackets for it jsUser["full name"]
    age: 22,
    location: "Gwalior",
    [mySym]: "myKey", // We can access symbol by jsUser[mySym], we can't access it by dot notation
    email: "sidoritial@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
};

// console.log(jsUser[mySym])

// For updating value
jsUser.email = "sid@microsoft.com";
// console.log(jsUser.email);

// Suppose you want that now no one can update the values in the object then we will freeze the object.
// Object.freeze(jsUser);
jsUser.email = "sid@google.com"; // It will not produce any error but also not update anything
// console.log(jsUser.email);

jsUser.greeting = function () {
    console.log(`Hello Bruhh ${this.name}`);
}

console.log(jsUser.greeting);// It will give the function reference
console.log(jsUser.greeting());// It will call the function




