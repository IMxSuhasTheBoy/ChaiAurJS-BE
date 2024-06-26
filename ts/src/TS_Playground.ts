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
function getFirstEle<myEleType>(myArray: myEleType[]) {
  return myArray[0];
}

const numberss = ["we", 1, "wew", 2, 3];
const stringss = ["ll", 1, "kk", "jj", 3, 23];
const booleansNumbers = [true, 1, false, true, 3, 23];

const firstNum = getFirstEle<number | string>(numberss);
const firstNum2 = getFirstEle<number | boolean>(booleansNumbers);

console.log(firstNum);
console.log(firstNum2);
