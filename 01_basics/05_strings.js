/// 0 based indexing in JS( Object, Arry etc.)
const name = "hitesh"; ///decleared a string( primitive)
const repoCount = 50;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("imx-hitesh-hc-com"); ///decleared a string( Obj)

// console.log(gameName[0]);
// console.log(gameName.__proto__); ///go use test.html to see proto methods Obj
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
// console.log(`${newString} : substring()`);

const anotherString = gameName.slice(-10, 13);
// console.log(anotherString, " : slice()"); ///counting in -ve is from end (10th index from end) to 13th index fromstart

const newStringOne = "   hitesh    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"; // %20 url encoding exmaple

// console.log(url.replace("%20", "-"));

// console.log(url.includes("sundar"));

// console.log(gameName.split("-")); // "imx-hitesh-hc-com" returns Array
const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
// console.log(words);
// console.log(words[3], str.split(" "));
// Expected output: "fox"

const chars = str.split(""); // withou limiter
// console.log(chars)
// console.log(chars[8], str.split("", 14)); // with limiter
// Expected output: "k"

const strCopy = str.split();
// console.log(typeof strCopy); //in js everything is Object
// console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//.........................................

// console.log(eval("2 + 2")); ///!intresting methods
let testStr0 = 2 + 2;
testStr0 = eval("2 + 2");
// console.log(`${typeof testStr0}`);
/// Expected output: 4

let testStr = eval(new String("2 + 2"));
// console.log(typeof testStr);

console.log(eval(new String("2 + 2")));
/// Expected output: 2 + 2

console.log(eval("2 + 2") === eval("4"));
// Expected output: true

console.log(eval("2 + 2") === eval(new String("2 + 2")));
// Expected output: false

///must
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
