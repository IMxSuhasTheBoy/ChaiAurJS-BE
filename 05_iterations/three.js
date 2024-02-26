// for of

// ["", "", ""]
// [{}, {}, {}]

// for (const iterator of object) {}

const arr = [21, 42, 13, 54, 52, "meToo"];

for (const num of arr) {
  console.log(num);
}
for (const num of arr.entries()) {
  console.log(num);
}
for (const [idx, item] of arr.entries()) {
  console.log(idx, item);
}///destructured

const greetings = "Hello world!";
for (const greet of greetings) {
  // console.log(`Each char is ${greet}`)
  console.log(`${greet}`)
}

// // Maps can have key of any type, its iterable unlike object

const map1 = new Map();
map1.set("IN", "India");
map1.set("USA", "United States of America");
map1.set("Fr", "France");
map1.set("IN", "India");

console.log( map1 ); // duplicate entries not taken

for (const item of map1) {
  // console.log(item)
}
for (const [key, value] of map1) {
  // console.log(key, ':-', value);
}

const inventory = map2 = new Map([
  ["food", "biryani"],
  ["footware", "shoes"],
  // [document.querySelector("h2"), 20],
  [false, "cant drive"]
]);
console.log(inventory.get(false))
/// .has() .size .delete() 

for ( [key, ele] of inventory ) {
  console.log(`${key}: ${ele}`)
}

///-------------------

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObject) {
//      console.log(key, ':-', value);

// }       // err , cause normal obj are not iterable this way


///extract Obj values in array
const myObjectValues = Object.values(myObject)
console.log(myObjectValues)

const myObjectEntries = Object.entries(myObject)
console.log(myObjectEntries)

for (const elem of myObjectEntries) {
  console.log(elem);
}
for (const [key, value] of myObjectEntries) {
  console.log(key, value);
}

const test = ["name",{firstName: "shawn", lastName: "theSheep"}];

for (const key in test[1]) {
  console.log(test[1][key])
}
