/**
1. Use type annotations for properties and variables that have complex or ambiguous types. This helps ensure type safety and makes the code more readable.

2. Use type inference for simpler cases where the type can be easily inferred based on the assigned value or usage. This can save time and effort in explicitly annotating every property, variable, and function.

3. Be mindful of the trade-off between explicitness and simplicity. Over-reliance on type annotations can make the code more verbose and harder to maintain. On the other hand, under-reliance on type inference can lead to type errors that could have been caught earlier.

4. Regularly review and update type annotations as needed. TypeScript's type inference can change over time, so it's important to keep the type annotations up to date to ensure the code remains bug-free.

Overall, the goal is to strike a balance between explicitness and simplicity while ensuring type safety and maintainability in production-grade code.
*/

//*annotaion
//Use type aliases to define new names for existing types.
// below type alias can be usefull for function parameters, while createing objects all those multiple times.
type InfoObjTypeAlias = {
  readonly name: string;
  age?: number;
  skills?: string[];
};
const tame: InfoObjTypeAlias = {
  name: "hitesh",
};
// tame.name =
console.log(typeof tame);

const returnStringGreet = (user: InfoObjTypeAlias) => {
  console.log(user.skills);
  return `Hello ${user.name}`;
};

console.log(returnStringGreet({ name: "jites", age: 25 }));

/////////////////////////
//*inference
let numbersArray = [1, 2, 3];
let itemsArray = [1, 2, 3, null];
//*never inference
let loop = function forever() {
  while (true) {
    console.log("Hello");
  }
};

//* string literal inference alias also possible to use it for other primitive types
type MouseEvents = "click" | "scroll" | "mousemove";

let myMouseEvents: MouseEvents;
myMouseEvents = "click";

let mySecondEvents: MouseEvents;
mySecondEvents = "click";
mySecondEvents = "scroll";
//////////////////////////////////////
//*intersection types
type Type1 = {
  prop1: string;
  method1(): void;
};

type Type2 = {
  prop2: number;
  method2(): void;
};

type CombinedType = Type1 & Type2;

const combined: CombinedType = {
  prop1: "Hello",
  prop2: 42,
  method1() {
    console.log("Method 1");
  },
  method2() {
    console.log("Method 2");
  },
};

console.log(combined.prop1); // Output: Hello
console.log(combined.prop2); // Output: 42
combined.method1(); // Output: Method 1
combined.method2(); // Output: Method 2s

type userDets = {
  username: string;
  useremail: string;
};

type accDets = {
  identifier: string;
  passcode: number;
};
let user: userDets | accDets = {
  passcode: 1234,
  identifier: "hitesh",
  useremail: "hitesh@hitesh",
  username: "hitesh",
};
//////////////////////////////////////
let pw: "pw" = "pw";
//! pw =

//////////////////////////////////////
//*Generic type para
//<T> : type parameter : when calling function we can pass any type
function printingWorkOnly<Type>(item: Type, defaultValue: Type): [Type, Type] {
  return [item, defaultValue];
}

const res1 = printingWorkOnly<number>(42, 0);
const res2 = printingWorkOnly("It's stringss", "0..."); //inference
console.log(res1);
console.log(res2);

//*a generic function with two type variables
function printingWorkOnlyMerged<U, V>(item: U, defaultValue: V): [U, V] {
  return [item, defaultValue];
}

const res3 = printingWorkOnlyMerged<string, boolean>("It's string again", true);
console.log(res3);

//////////////////////////////////////////////////
function printingWorkOnlyMergedAgain<U, V>(obj1: U, obj2: V): U & V {
  return {
    ...obj1,
    ...obj2,
  };
}

const res4 = printingWorkOnlyMergedAgain<Object, Object>(
  { 9: "eight", one: 1, nine: 9, 4: "four" },
  { 0: "zero", three: 3 }
);
console.log(res4);
//////////////////////////////////////////////////
//*custom type for generic function
interface Cloth {
  name: string;
  size: number;
}
interface Cloth2 {
  brand: string;
  color: string;
}
const cloths = printingWorkOnlyMergedAgain<Cloth, Cloth2>(
  { name: "t-shirt", size: 42 },
  { brand: "djc", color: "red" }
);
console.log(cloths);
///////////////////////////////////////////////////

//* examples
// get a random key value pair from an object of any type
function getRandomKeyValPair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);

  const randomKey = keys[Math.floor(Math.random() * keys.length)];

  return { key: randomKey, value: obj[randomKey] };
}

const stringObject = {
  player1: "hitesh",
  player2: "jitesh",
  player3: true,
  player4: "rahul",
  player5: "mitesh",
};
const numObject = {
  1: 34,
  2: 36,
  3: 38,
  4: 30,
  5: 32,
};

const { key, value } = getRandomKeyValPair<string | boolean>(stringObject);
console.log(key, value);
///
const example = getRandomKeyValPair(numObject);
console.log(example);
const { key: exampleKey, value: exampleValue } = example;
console.log(exampleKey, exampleValue);
///////////////////////////////////////////////////////////

//*generic function accepts array & condition  to ferform filtering on array

function filterArray<T>(arr: T[], condition: (item: T) => boolean): T[] {
  return arr.filter((item) => condition(item));
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray<number>(numbers, (item) => item % 2 === 0);
console.log(evenNumbers);

const strings = ["hello", "world", "good", "morning"];
const longWords: string[] = filterArray<string>(
  strings,
  (item) => item.length > 5
);
console.log(longWords);

interface Fruit {
  name: string;
  color: string;
  taste: string;
}

const fruitArr: Fruit[] = [
  { name: "apple", color: "red", taste: "sweet" },
  { name: "mango", color: "yellow", taste: "sweet" },
  { name: "banana", color: "yellow", taste: "sweet" },
  { name: "orange", color: "orange", taste: "sour" },
  { name: "grape", color: "purple", taste: "sour" },
  { name: "kiwi", color: "green", taste: "sour" },
  { name: "watermelon", color: "green", taste: "sweet" },
  { name: "strawberry", color: "red", taste: "sour" },
  { name: "pineapple", color: "yellow", taste: "sour" },
  { name: "cherry", color: "red", taste: "sour" },
  { name: "jamun", color: "purple", taste: "sweet" },
];

const redFruits = filterArray<Fruit>(fruitArr, (item) => item.color === "red");
console.log(redFruits);

function mergeObjects<U extends object, V extends object>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}

const mergedObj1 = mergeObjects(
  { a: "aa", i: 1, e: 9, b: "bb" },
  { 0: "zero", d: "dd" }
);
// console.log(mergedObj1);
//////////////////////////////
//*
function retProp<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const testObject = {
  name: "hitesh",
  age: 18,
  work: "teaching",
};

const test = retProp(testObject, "age");
console.log(test);
