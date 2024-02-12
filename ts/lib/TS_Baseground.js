"use strict";
///Detecting errors in code without running it is referred to as static checking. ///Docs https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html
///Determining what’s an error and what’s not based on the kinds of values being operated on is known as static type checking.
///specify types for variables, function parameters, and return values, use of classes, interfaces, and type declarations
/*learn about settings you can use to configure how strictly TypeScript checks your code. 1.Keeping the same runtime behavior as JavaScript is a foundational promise of TypeScript, */
// npm i typescript
// npx tsc --init --rootdir src --outdir lib
// npx tsc --watch
const myname = "jdm";
// myname = 67
console.log(myname);
// node TS_Basegrounds.js
/*// let num = 7;

// console.log(typeof num);

// num = num.toString()
// console.log(typeof num)
*/
/* // let age: number = 25;
// let isStudent: boolean = true;
// let notPresent: null = null;
// let notDefined: undefined = undefined;
// let someValue: any = "I can be any type!";
// let penta: symbol = Symbol("start");
// let biggy: bigint = 24n;
*/
let regexp = new RegExp("ab+c");
let fruitsA = ["apple", "banana", "orange"]; ///litterals
let fruitsB = ["apple", "banana", "orange"];
let numbersA = [1, 2, 3, 4, 5]; ///type annotation/generic
let numbersB = [1, 2, 3, 4, 5]; ///shorthand for above result
let numbersC = [1, "2", 3, 4, 5];
const rbgConfig = [
  [223, 434, 112],
  [222, 434, 122],
  [223, 453, 152],
];
///A tuple in TypeScript is an ordered collection of elements of different types.
let manushyaPrani = ["John Doe", 30, true];
let set = new Set([5, 3, 1]);
let person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};
/**first in first out collection (OOP), accepting generic type**/
class Queue {
  data = [];
  push(item) {
    this.data.push(item);
  }
  pop() {
    return this.data.shift();
  }
}
let queue = new Queue();
queue.push(1);
queue.push(2);
console.log(queue.pop()); // Output: 1
console.log(queue.pop()); // Output: 2
console.log(queue.pop()); // Output: undefined (queue is empty)



