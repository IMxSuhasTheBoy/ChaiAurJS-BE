console.log("Hitesh");

const first = 80.5;
const second = 90;
const third = 60;
const marksArray = [80, 70, 75, 95, 85];
const ave = (...numbers) => {
  const total = numbers.reduce((sum, num) => sum + num, 0);

  return ((total / (numbers.length * 100)) * 100).toFixed(2);
};

const result = ave(first, second, third, ...marksArray);
console.log(result);
