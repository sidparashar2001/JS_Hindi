const myDate=new Date();
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate)

const myCreatedDate = new Date(2023,0,22);//In js month starts from 0
// console.log(myCreatedDate.toLocaleString());

const mytimeStamp = Date.now();
// console.log(mytimeStamp);//Will give time in mini sec from 1st january 1970
// console.log(myCreatedDate.getTime());// it will also give time in mini sec

// to get in minutes
// console.log(Math.floor(Date.now()/1000));

// Some more functions
const newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))