const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (val){
//     console.log(val);
// } )                             // method: callback (normal func)

// coding.forEach( (item) => {
//     console.log(item);
// } )                             //  method: callback (arrow func)

function printMe(item) {
  console.log(item);
}

// coding.forEach(printMe)        // call a func as for execution

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )                               // getting all possible details

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  // console.log(item.languageFileName , "a");
  // console.log(item.languageName, "b")
});

///---------------------Docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#converting_a_for_loop_to_foreach
///JS M&E Challenge 1
let workers = [
  { name: "Sophia", salary: 75000, age: 24 },
  { name: "David", salary: 52000, age: 35 },
  { name: "John", salary: 50000, age: 60 },
  { name: "Alice", salary: 60000, age: 70 },
  { name: "Bob", salary: 55000, age: 40 },
  { name: "Eva", salary: 70000, age: 75 },
  { name: "Mike", salary: 48000, age: 25 },
];

// Function to calculate total salary and average salary using reduce
function calculateTotalAndAverageSalary(workerArray) {
  // Use the reduce method to iterate over the array and accumulate total and average salary
  let { totalSalary, averageSalary } = workerArray.reduce(
    // The callback function takes an accumulator (acc) and each worker from the array
    (acc, worker) => ({
      // Accumulate the total salary by adding the current worker's salary
      totalSalary: acc.totalSalary + worker.salary,
      // Calculate the average salary by dividing the total salary by the number of workers
      averageSalary: acc.totalSalary / workerArray.length,
    }),
    // The initial accumulator object with totalSalary and averageSalary set to 0
    { totalSalary: 0, averageSalary: 0 }
  );

  // Return an object with total and average salary
  return { totalSalary, averageSalary };
}
// Call the function and display the result
let result = calculateTotalAndAverageSalary(workers);
console.log("Total Salary of all workers: $" + result.totalSalary);
console.log("Average Salary of all workers: $" + result.averageSalary);

///Brutforce solution
let totall = 0;

function calcAverage(workersArray) {
  workersArray.forEach((ele) => {
    totall += ele.salary;
  });
  return Math.trunc(totall / workersArray.length);
}

let res = calcAverage(workers);
console.log(res);
///------------------

const cars1 = ["AMC", "BMW", "GM"];

const copyCars1 = [];
///ex1
// for (let i = 0; i < cars1.length; i++) {
//   copyCars1.push(cars1[i]);
// }

///ex2
// ["AMC", "BMW", "GM"].forEach((i) => {
//   copyCars1.push(i);
// });
console.log(copyCars1);

console.table(cars1);

///ex3
const logElemets = (ele, idx) => {
  console.log(`At ${idx} it's ${ele}`);
};

["AMC", "BMW", "GM"].forEach(logElemets);


///-------------------------------------------good ex for how to handle this binding in a callback function within the context of a class method, ensuring that it refers to the correct instance.

class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }

  add(array) {
    ///unlike normal func. Arrow functions do not have their own this bindings. automatically captures the correct this from the context in which it is defined.
    array.forEach((entry) => {
      this.sum += entry;
      ++this.count;
    });
  }
}

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count); // 3
console.log(obj.sum); //16
///count (the number of entries in the array), and sum is (the sum of all entries in the array).
