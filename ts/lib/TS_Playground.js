"use strict";
///Javascript ex///////////////////////////////////////////////
///v1.0
// function getSecondEle(myArray) {
//   return myArray[1];
// }
// const js_Ex_Numbers = [1, 2, 3];
// const secondNum = getSecondEle(js_Ex_Numbers);
///TypeScript ex///////////////////////////////////////////////
/* v1.0
function getFirstEle(myArray: number[]) {
  return myArray[0];
} */
/* v1.1
function getFirstEle(myArray: (string | number)[]) {
   return myArray[0];
} */
///v1.2
function getFirstEle(myArray) {
    return myArray[0];
}
const numberss = ["we", 1, "wew", 2, 3];
const stringss = ["ll", 1, "kk", "jj", 3, 23];
const firstNum = getFirstEle(numberss);
console.log(firstNum);
