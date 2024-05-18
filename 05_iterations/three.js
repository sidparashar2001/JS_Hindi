const myObject1 = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
};

for (const key in myObject1) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["cpp", "java", "js", "python", "ruby", "swift"];
// In case of array key will be index
for (const key in programming) {
    // console.log(`${key}th value for ${programming[key]}`);
}

const map = new Map();
map.set("IN", "India");
map.set("IN", "India");//It won't holds duplicate values
map.set("USA", "United States Of India");
// console.log(map);

// for in won't work in case of map
for (const key in map) {
    console.log(key);
}