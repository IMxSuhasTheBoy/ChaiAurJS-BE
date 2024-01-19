# **JS** Datatypes assignment Ques 10x

## !mportant Note: whenever any data stores(in variables) it takes 64-bits space

## Thire data type is identified by thire starting 3 bits

## ex. Object data type has 0,0,0 on its starting 3 bits. **similarly null also has 0,0,0 on its starting 3 bits, for obvious reasons (null = empty)**

```javascript
///Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.

const userInputDistKM = 10;

const convert = (value) => {
  const convertedInMeters = value * 1000;
  const convertedInCM = convertedInMeters * 100;

  return {
    m: convertedInMeters,
    cm: convertedInCM,
  };
};

// let userInputDistKM = parseFloat(prompt("enter km"));

if (!isNaN(userInputDistKM)) {
  let converted = convert(userInputDistKM);

  console.log(`Distance in Kms : ${userInputDistKM}`);
  console.log(`Distance in Meters : ${converted.m}`);
  console.log(`Distance in CenteMeters : ${converted.cm}`);
} else {
  console.log(`Enter the valid number value`);
}
```

---

```javascript
///Question-2:    WAP to input radius of a circle and log the area of circle.

const radious = 5;
const area = (radious) => {
  return 3.14 * radious * radious;
};

// let radious = parseFloat(prompt("Enter radious of circle"));

if (!isNaN(radious) && radious >= 0) {
  result = area(radious);
  console.log(`Area of cirle is ${result}`);
} else {
  console.log(`Enter valid number input`);
}
```

```javascript
///Question-3: WAP to input two numbers and perform arithmetic operations on those numbers. +, -, *, /, %, **

const first = 5;
const second = 8;

///functions for operations
const add = (first, second) => first + second; ///implicit return with arrow func

const sub = (first, second) => console.log(`Subtraction: ${first - second}`);

///taking user input
// const first = parseFloat(prompt("enter first number"));
// const second = parseFloat(prompt("enter second number"));

///calling
console.log(`Addition: ${add(first, second)}`);

if (!isNaN(first, second) && first >= second) {
  sub(first, second);
}
```

```javascript
///Quesion 4:  WAP to calculate total marks in two subject and then calculate percentage. (with more cheks)
const marksArray = [];

const getUserInput = () => {
  while (true) {
    const userInput = prompt('Enter a number (or type "exit" to finish):');

    if (userInput.toLowerCase() === "exit") {
      break;
    }

    const number = parseFloat(userInput);

    if (!isNaN(number)) {
      marksArray.push(number);
    } else {
      alert("Invalid input. Please enter a valid number.");
    }
  }
};
getUserInput();
const calculateAverage = (...marks) => {
  const total = marks.reduce((sum, num) => sum + num, 0);
  const average = ((total / (marks.length * 100)) * 100).toFixed(2);
  return { totalMarks: total, average };
};

const result = calculateAverage(...marksArray);
console.log(`Total Marks ${result.totalMarks}, Average: ${result.average}`);

///OneLiner
console.log(
  `${(
    (Arrr.reduce((sum, num) => sum + num, 0) / (Arrr.length * 100)) *
    100
  ).toFixed(2)}`
);
```

```javascript
///Question-5: WAP to input the length and breath of rectangle and calculate the area and parimeter of rectangle.

let length;
let breath;
while (true) {
  length = parseFloat(prompt("Length: "));
  breath = parseFloat(prompt("Breath: "));

  if (!isNaN(length) && !isNaN(breath)) {
    break;
  } else {
    alert("Invalid input. Please enter a valid number.");
  }
}

const calculatePerimeter = (length, breath) => {
  return 2 * (length + breath);
};
const calculateArea = (length, breath) => {
  return length * breath;
};

console.log("Perimeter of rectangle:", calculatePerimeter(length, breath));
console.log("Area of rectangle:", calculateArea(length, breath));

///Version of ChatGPT------------------------------------------------------
const getUserInput = (promptMessage) => {
  let userInput;
  while (true) {
    userInput = parseFloat(prompt(promptMessage));
    if (!isNaN(userInput)) {
      break;
    } else {
      alert("Invalid input. Please enter a valid number.");
    }
  }
  return userInput;
};

const rectangleLength = getUserInput("Enter the length of the rectangle: ");
const rectangleBreadth = getUserInput("Enter the breadth of the rectangle: ");

const calculatePerimeter = (length, breadth) => 2 * (length + breadth);
const calculateArea = (length, breadth) => length * breadth;

const perimeter = calculatePerimeter(rectangleLength, rectangleBreadth);
const area = calculateArea(rectangleLength, rectangleBreadth);

console.log(`Perimeter of rectangle: ${perimeter}`);
console.log(`Area of rectangle: ${area}`);
```

```javascript
///Question-6: WAP to input n numbers and log the average of those number.
const arrr = [];

const getUserInput = () => {
  let userInput;
  while (true) {
    userInput = prompt("Enter a number (type 'exit' to finish):");
    if (userInput.toLowerCase() === "exit") {
      return userInput;
    }

    const number = Number(userInput);
    if (!isNaN(number)) {
      arrr.push(number);
    } else {
      alert("Enter valid number");
    }
  }
};

const input = getUserInput("Enter the number");

const calculateAverage = (...numbers) => {
  let sum = numbers.reduce((sum, num) => sum + num, 0);
  return sum / numbers.length;
};

if (input.toLowerCase() === "exit" && arrr.length <= 0) {
  console.log("User exited withou entering a number");
} else {
  let result = arrr.length > 0 ? calculateAverage(...arrr) : 0;
  console.log(`Your entered Marks ${arrr}  Average: ${result}`);
}
```

```javascript
/// Question-7: WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter. (refactored) learnt destructuring asignment on arrays, Object.entries()...


// Function to convert distance to different units
function convertDistance(distance, conversionFactor) {
  // console.log(distance, conversionFactor)
  return distance * conversionFactor;
}

// Function to display the converted distances
function displayConvertedDistances(distances) {
  for (const [unit, value] of distances) {
      console.log(`Distance in ${unit}: ${value} ${unit}`);
  }
}

// Input: Distance in kilometers
// const distanceInKm = parseFloat(prompt("Enter the distance between two cities in kilometers:"));
const distanceInKm = 3;

// Check if the input is a valid positive number
if (!isNaN(distanceInKm) && distanceInKm >= 0) {
  // Define conversion factors
  const conversionFactors = {
      meters: 1000,
      feet: 3280.84,
      inches: 39370.1,
      centimeters: 100000,
  };

  // Convert distances
  const convertedDistances = Object.entries(conversionFactors).map(([unit, factor]) => [unit, convertDistance(distanceInKm, factor)]);

  // console.log(Object.entries(conversionFactors))
  // console.log(convertedDistances)

  // Display the converted distances
  displayConvertedDistances(convertedDistances);
} else {
  console.log("Invalid input. Please enter a valid positive number for distance.");
}

///learning1 : Object.entries(conversionFactors):This method returns an array of key-value pairs from the conversionFactors object. Each pair is represented as an array.

///learning2 : The use of square brackets around unit and factor in the destructuring assignment is a concise way to extract values from the key-value pairs in the array returned by Object.entries(conversionFactors). It allows you to directly use these extracted values within the arrow function, making the code more readable and expressive.
```
