const programming = ["cpp", "java", "js", "python", "ruby", "swift"];

// Ab forEach m callback function jaata h toh callback function ko apn naam nhi dete
// programming.forEach( function (item) {
//     console.log(item);
// });

// programming.forEach((item) => {
//     console.log(item);
// });


function printMe(item) {
    // console.log(item);
}

programming.forEach(printMe);


programming.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    }
];

myCoding.forEach((item) => {
    console.log(item.languageName);
})