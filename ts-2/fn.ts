//declare function with annotation for parameters and return type
function fnForNumber(x: number, y: number): number {
  return x + y;
}
const addTwoAndThree = fnForNumber(2, 3); //function instantiation
const addThreeAndThree = fnForNumber(3, 3);
// console.log(addThreeAndThree);
// console.log(addThreeAndThree);
//////////////////////////////////////////////
//function annotation for parameters and return type
let fnToMultiply: (x: number, y: number) => number;
fnToMultiply = function (num1, num2) {
  return num1 * num2;
};
// console.log(fnToMultiply(2, 4));
/////////////////////////
//enum
enum Month {
  Jan = 1,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}
function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}
// console.log(Month);
// console.log(isItSummer(Month.Jun));
// console.log(isItSummer(9));
////////////////////////////////////
