# **JS** Datatypes assignment Ques 10x

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
const first = 80.5;
const second = 90;
const marksFrom = 200;

const ave = (num1, num2, marksFrom) => {
  let total = num1 + num2;
  return (total / marksFrom) * 100;
};
///taking user input
// const first = parseFloat(prompt("enter first number"));
// const second = parseFloat(prompt("enter second number"));

const result = ave(first, second, marksFrom);
console.log(result);
```
