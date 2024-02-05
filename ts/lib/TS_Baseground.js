"use strict";
///specify types for variables, function parameters, and return values, use of classes, interfaces, and type declarations
// npm i typescript
// npx tsc --init --rootdir src --outdir lib
// npx tsc --watch
const myname = "kam25";
console.log(myname);
// node TS_Basegrounds.js
/* // let age: number = 25;
// let isStudent: boolean = true;
// let notPresent: null = null;
// let notDefined: undefined = undefined;
// let someValue: any = "I can be any type!";
// let penta: symbol = Symbol("start");
// let biggy: bigint = 24n;
*/
let regexp = new RegExp("ab+c");
let fruitsA = ["apple", "banana", "orange"];
let fruitsB = ["apple", "banana", "orange"];
let numbersA = [1, 2, 3, 4, 5]; ///generic type declaration syntax
let numbersB = [1, 2, 3, 4, 5]; ///shorthand for above result
let set = new Set([5, 3, 1]);
let person = {
    name: "Alice",
    age: 25,
    isStudent: true,
};
/**first in first out collection **/
class Queue {
    data = [];
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
let queue = new Queue();
queue.push(1);
queue.push(2);
console.log(queue.pop()); // Output: 1
console.log(queue.pop()); // Output: 2
console.log(queue.pop()); // Output: undefined (queue is empty)
