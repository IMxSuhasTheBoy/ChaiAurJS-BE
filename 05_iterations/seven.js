let workers = [
  { isMarrid: false, name: "David", salary: 52000, age: 35 },
  { isMarrid: true, name: "Sophia", salary: 75000, age: 24 },
  { isMarrid: false, name: "John", salary: 50000, age: 60 },
  { isMarrid: true, name: "Bob", salary: 55000, age: 40 },
  { isMarrid: false, name: "Alice", salary: 60000, age: 70 },
  { isMarrid: true, name: "Eva", salary: 70000, age: 75 },
  { isMarrid: true, name: "Mike", salary: 48000, age: 25 },
];

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);

///JS M&E Challenge 2
let isMarrid;
const nu = workers.map((ele) => {
  if (ele.isMarrid) {
    console.log(ele);
    isMarrid = { ele };
  } else {
    console.log(ele);
  }
});
console.log(isMarrid);
