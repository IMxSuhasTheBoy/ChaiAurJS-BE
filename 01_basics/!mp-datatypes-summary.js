///  Primitive

///  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

/// Reference (Non primitive)

/// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

// console.log(typeof scoreValue);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// const first = 5;
// const second = 10;

const add = (first, second) => first + second; ///implicit return with arrow func

const sub = (first, second) => {
  console.log(`Subtraction: ${first - second}`);
}; ///explicit return with arrow func
const mul = (first, second) => console.log(`Multiplication: ${first * second}`);
const div = (first, second) => console.log(`Division: ${first / second}`);
const rem = (first, second) => console.log(`Remainder: ${first % second}`);
const exp = (first, second) =>
  console.log(`Exponentiation: ${first ** second}`);

const first = parseFloat(prompt("enter first number"));
const second = parseFloat(prompt("enter second number"));

///test with above all func
console.log(add(first, second));

///checks  practices: This JavaScript code checks if both first and second are not NaN (Not-a-Number). 

if (!isNaN(first, second)) {
  sub(first, second)
  
}
