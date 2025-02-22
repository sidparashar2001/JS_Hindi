// Declaring singleton object using constructor

const newUser1 = new Object();
const newUser2 = {};

newUser2.id = "123abc";
newUser2.name = "Sammy";
newUser2.isLoggedIn = false;

// console.log(newUser2);

const regularUser = {
    email: "sidoritial@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Siddharth",
            lastname: "Parashar"
        }
    }
};

// console.log(regularUser.fullname.userfullname.firstname);


// Combining two objects

const obj1 = { fname: "Siddharth", lname: "Parashar" };
const obj2 = { faname: "Rajesh", lname: "Parashar" };
// Method 1
// const obj3= {obj1,obj2}; //This won't work fine

// Method2
// const obj3 = Object.assign(obj1,obj2); // It updates existing object means obj1

// Method 3 - Use this method mostly
const obj3 = { ...obj1, ...obj2 }; // It doesn't updates any object

// console.log(obj3);


// So in mostly cases like database ke case m especially data aaega array of objects ke form m
const users = [
    { id: 1, name: "Siddharth" },
    { id: 2, name: "Siddharth" },
    { id: 3, name: "Siddharth" },
    { id: 4, name: "Siddharth" }
]

// console.log(users[1].id);

// console.log(Object.keys(newUser2));
// console.log(Object.values(newUser2));
// console.log(Object.entries(newUser2));

// console.log(newUser2.hasOwnProperty("isLoggedIn"));


// Object destructuring
// It allows us to extract specific properties from an object and assign them to variables . Instead of accessing each property manually, you can do it in one step using curly braces
const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "Siddharth"
}

const { courseInstructor } = course;
console.log(courseInstructor);
// Or you can name it by yourself also
const { courseInstructor: instructor } = course;
console.log(instructor);
