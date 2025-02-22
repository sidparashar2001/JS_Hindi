
const instruments = ["Guitar","Harmonica","Kazoo","Saxophone"];
const scales = ["Major","Minor","Pentatonic","Blues"];

// console.log(instruments.push(scales));// it will push the array in instruments and modifies the instrument array and also it will directly push the whole scales array as an single element
// console.log(instruments);
// const newArray = instruments.concat(scales); // it will concat elements one by one as an single element and won't modify the original array
// const bluearray = instruments.push(scales);
// console.log(instruments);
// console.log(newArray);
// console.log(bluearray);

const newArr2 = [...instruments,...scales];
// console.log(newArr2);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realAnotherArray = anotherArray.flat(Infinity); // sub array ko array m convert kr dega
// You can also pass infinity in flat to convert all the subarrays into elements
// console.log(realAnotherArray);

// console.log(Array.isArray("Siddharth")); // Gives true or false

// console.log(Array.from("Siddharth")); // Gives an array from the string

console.log(Array.from({name:"Siddharth"})); //Will give an empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // Returns a new array from set of elements