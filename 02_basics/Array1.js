// Javascript arrays are resizable and can contain a mix of data types

// Ways to declare array
const arr1 = [1,2,3,4,5];

const arr2 = new Array(1,2,3,4);
// console.log(arr2[0]);

// Array Methods

console.log(arr2.push(5));// adds the element in the end of the array
console.log(arr2.pop()); // removes the element in the end of the array
console.log(arr2.unshift(12));// adds the element in the starting of the array
console.log(arr2.shift());// removes the element in the starting of the array
console.log(arr1.includes(4));// Gives true or false 
console.log(arr1.indexOf(4));// Gives the index if present otherwise -1
console.log(arr1.join());


// Slice and Splice

const newArr1 = [1,2,3,4,5];
const newArr2 = [6,7,8,9,10];

console.log("Slice:");
console.log(newArr1);
console.log(newArr1.slice(1,3));// Slice gives the element from index 1 to 2, 3 is not included
console.log(newArr1);// Slice doesn't modify the original array

console.log("Splice:");
console.log(newArr2);
console.log(newArr2.splice(1,3));// Splice gives the element from index 1 to 3
console.log(newArr2);// Slice modify the original array
