const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const values1 = myNumbers.map((num) => num + 10);
// console.log(values1);

// Filter m true and false vaaala game chlta h and map m toh confirm h kuch na kuch return hoga hi
const values2 = myNumbers
    .map((num) => num * 10) // this operation will be completed first then it's result will go into next map
    .map((num) => num + 1) // the result array of above operation will now be modified here
    .filter((num) => num >= 40);
// console.log(values2);

const values3 = myNumbers.map((num) => num > 1);
// console.log(values3);
/* result
 [
  false, true, true,
  true,  true, true,
  true,  true, true,
  true
 ]
*/

const values4 = myNumbers.filter((num) => num > 1);
console.log(values4);