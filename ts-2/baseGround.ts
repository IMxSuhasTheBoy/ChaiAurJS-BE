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
