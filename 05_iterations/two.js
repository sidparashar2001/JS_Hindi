// for of

const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
    // console.log(val);
}

const greetings = "Hello World!";
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps - It's an object that holds key value pair, maintains the orders of keys at the time of insertion
const map = new Map();
map.set("IN", "India");
map.set("IN", "India");//It won't holds duplicate values
map.set("USA", "United States Of India");
console.log(map);

for (const key of map) {
    // console.log(key); // It will give key value pair in the form of array
}

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObject = {
    "game1": "NFS",
    "game2": "Spiderman"
};

// For of will not work in case of  objects
for (const [key, value] of myObject) {
    console.log(key, ":-", value);
}