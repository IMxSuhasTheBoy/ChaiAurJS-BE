"use strict"; // treat all JS code as newer version

// alert(3 + 3); // we are using nodejs, not browser

console.log(3 + 3); // code readability should be high

console.log("Hitesh");

let name = "hitesh";
let age = 18;
let isLoggedIn = false;
let state;

// number => 2 to power 53 : range
// bigint
// string => ""
// boolean => true/false
// null =>   : standalone value, represents an intentional empty value.
// undefined => : value is not assigned yet.
// symbol => unique

// object

console.log(typeof age);
console.log(typeof undefined); // undefined
console.log(typeof null); // object

console.log(true);
console.log(false);

console.log(0);
console.log(-0);

console.log("       JS basics        -  Suhas");
console.log("Suhas");
console.log(`Suhas    TheBoy`);

console.log(typeof typeof undefined); ///typeof typeof "number"=> string
console.log(typeof typeof null); ///typeof typeof "number"=> string
console.log(typeof typeof 10); ///typeof typeof "number"=> string
console.log(typeof 10)