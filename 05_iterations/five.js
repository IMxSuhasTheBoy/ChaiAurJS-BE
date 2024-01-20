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

///JS M&E Challenge 1

let total = 0;
///---------------------
let workers = [
  { name: "Sophia", salary: 75000, age: 20 },
  { name: "David", salary: 52000, age: 20 },
  { name: "John", salary: 50000, age: 20 },
  { name: "Alice", salary: 60000, age: 20 },
  { name: "Bob", salary: 55000, age: 20 },
  { name: "Eva", salary: 70000, age: 20 },
  { name: "Mike", salary: 48000, age: 20 },
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
///------------------

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
