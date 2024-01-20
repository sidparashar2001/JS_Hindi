let no = 123.45678;
let otherNo = 123.45678;

// console.log(no.toPrecision(2));// It moves from left
// console.log(no.toFixed(2));// It movies from right

let hundreds = 1000000;
// console.log(hundreds.toLocaleString()); //Internationl system
// console.log(hundreds.toLocaleString('en-IN')); //Indian system
// One more thing it gives output according to browser and system setting just like in our case it's giving same output

//  *******************  Maths  *****************
// console.log(Math.abs(-4));
// console.log(Math.ceil(4.2));
// console.log(Math.round(4.6));
// console.log(Math.floor(4.9));

console.log(Math.random()); //gives a random number b/w 0 and 1
console.log(Math.random() * 10) //to get a higher number but agr 0.004 aa gya toh 0.04 de dega or apn chaa rhe h ki atleast ek toh digit rhe decimal se pehle
console.log((Math.random() * 10) + 1) //+1 krne se vo case bhi solve ho gaya
console.log(Math.floor((Math.random() * 10)) + 1)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

