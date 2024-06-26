function filterTheArray(arr, condition) {
  return arr.filter(function (item) {
    return condition(item);
  });
}

const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbersArr = filterTheArray(numbersArr, function (item) {
  return item % 2 === 0;
});
// console.log(evenNumbersArr);
////////////////////////////////////////////////

function returnProperyValue(obj, propName) {
  return obj[propName];
}

const testReturn = returnProperyValue(
  {
    name: "hitesh",
    age: 18,
    profession: "teaching",
  },
  "name"
);
// console.log(testReturn);
////////////////////////////////////////////////////
