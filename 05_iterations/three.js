// for of

// ["", "", ""]
// [{}, {}, {}]

// for (const iterator of object) {}

const arr = [21, 42, 13, 54, 52];

for (const num of arr) {
  // console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  // console.log(`Each char is ${greet}`)
}

// // Maps

const map1 = new Map();
map1.set("IN", "India");
map1.set("USA", "United States of America");
map1.set("Fr", "France");
map1.set("IN", "India");

// console.log( map1); // duplicate entries not taken

for (const [key, value] of map1) {
  // console.log(key, ':-', value);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObject) {
//      console.log(key, ':-', value);

// }       // err , cause normal obj are not iterable this way
