///specify types for variables, function parameters, and return values, use of classes, interfaces, and type declarations

// npm i typescript
// npx tsc --init --rootdir src --outdir lib
// npx tsc --watch
const myname: string = "kam25";
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

let regexp: RegExp = new RegExp("ab+c");

let fruitsA: string[] = ["apple", "banana", "orange"];

let fruitsB: Array<string> = ["apple", "banana", "orange"];

let numbersA: Array<number> = [1, 2, 3, 4, 5]; ///generic type declaration syntax

let numbersB: number[] = [1, 2, 3, 4, 5]; ///shorthand for above result

let set: Set<number> = new Set([5, 3, 1]);

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

let person: Person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};

/**first in first out collection **/
class Queue<T> {
  private data: Array<T> = [];
  push(item: T) {this.data.push(item);}
  pop(): T | undefined { return this.data.shift();}
}

let queue: Queue<number> = new Queue();

queue.push(1);
queue.push(2);

console.log(queue.pop()); // Output: 1
console.log(queue.pop()); // Output: 2
console.log(queue.pop()); // Output: undefined (queue is empty)
