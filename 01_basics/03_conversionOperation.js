///Outputs for termilal/console window:-
///console.log(), console.error(), console.warn()

///String interpolation ` ` (backtics)syntax for logging/displaying the calculated values/ variable values
// console.log(`text ${variable_name}`);
// console.log(`text ${var1 + var2} text`);

let score = "33";
// score = "33noo"; // NaN  when converted into Number.

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);

// console.log(Number(null)); //0
// console.log(typeof Number(undefined)); // number : NaN

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

//-----------------------------------------------

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

/// *********************** Operations ***********************

let value = 3;
let negValue = -value; // -3
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); ///2 x 2 x 2  = 8
// console.log(2%3);
// console.log(2/3);

// console.log(Math.floor(2/3));
// console.log(Math.ceil(2/3));
// console.log(Math.round(2/3)); https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); ///type coercion => automatic/implicit conversion of values.
// console.log(1 + "2"); ///type coercion
// console.log("1" + 2 + 2); ///type coercion
// console.log(1 + 2 + "2"); ///type coercion, conversion from Number to String, String to Number, Boolean to Number etc

/// *********************** Operator Precedence | (BODMAS rule)-fundamental concept ***********************
///Brackets, Orders, Division, Multiplication, Addition, and Subtraction ||| (in case multiple power operators in exp. solve them RHS -> LHS)
///https://www.twinkl.co.in/teaching-wiki/bodmas

///General order of solving an expression

console.log(((3 + 4) * 5) % 3); /// 3+4 = 7*5 = 35%3 = 2

// console.log(+true); /// converting boolean into number  kinda trick*
// console.log(+false); /// converting boolean into number
// console.log(+""); ///must know which are truthy falsy values in JS

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;
// console.log(num1, num2, num3); // lol! trash practices

let gameCounter = 100;
++gameCounter;
// console.log(gameCounter);

///Assingment oparators...

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// prefix postfix  must try examples
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

let x2 = 3n;
const y2 = x2++;
console.log(`value of x2: ${x2}, it's type is: ${typeof x2}`);
console.log(`value of y2: ${y2}, it's type is: ${typeof y2}`);


///Bitwise opaerators : can be useful in scenarios where you need to work with individual bits of binary representations, such as optimizing certain algorithms or dealing with low-level operations. However, they might not be commonly used in everyday JavaScript programming.