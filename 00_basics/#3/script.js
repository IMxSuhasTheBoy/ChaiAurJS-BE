let createCounter = function (n) {
  return function () {
    return n++;
  };
};

const myCounter = createCounter(10);

console.log(myCounter());
console.log(myCounter());
console.log(myCounter());