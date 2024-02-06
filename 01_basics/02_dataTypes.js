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

////Methods for NaN
///isNaN: The isNaN function coerces the argument before checking for NaN. It converts the argument to a number and then checks if it is NaN. However, be cautious when using isNaN, as it can produce unexpected results for non-numeric values. It's recommended to use Number.isNaN for more reliable NaN checks.

///Number.isNaN: The Number.isNaN function is a more reliable way to check for NaN. It performs a strict check and does not perform any coercion. It returns true only if the provided value is exactly NaN.