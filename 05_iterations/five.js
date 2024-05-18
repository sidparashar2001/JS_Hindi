const coding = ["js", "ruby", "java", "python", "cpp"];
const values1 = coding.forEach((item) => {
    // console.log(item);
})

// values will be undefined forEach doesn't return any values 
console.log(values1);

// So let's try to give return in it
const values2 = coding.forEach((item) => {
    return item;
})

// Still it will be undefined
// console.log(values2);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// It also takes callback
const values3 = myNums.filter((num) => num > 4);
// console.log(values3);//will give an array that contains numbers greater than 4

// Callback also has one more declaration with curly braces
const values4 = myNums.filter((num) => {
    return num > 4;
});
// console.log(values4);//will give an array that contains numbers greater than 4

//Suppose if someone doesn't wants to use filter they want to do it using filter only
const newArray = [];
myNums.forEach((num) => {
    if (num > 4) {
        newArray.push(num);
    }
});
// console.log(newArray);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const values5 = books.filter((book) => book.genre === "History");
// console.log(values5);

const values6 = books.filter((book) => book.publish > 2000);
// console.log(values6);

const values7 = books.filter((book) => book.publish > 1995 && book.genre === "History");
console.log(values7);

