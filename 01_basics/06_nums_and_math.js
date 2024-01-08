const score = 400;
// console.log(typeof score);

const balance = new Number(100);
// console.log(balance);
// console.log(typeof balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.8966;

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString("en-UK"));
// console.log(hundreds.toLocaleString("en-IN"));

// Number.MAX_VALUE
// 1.7976931348623157e+308

// Number.MIN_VALUE
// 5e-324

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4.6)); // 4 // 4.6
// console.log(Math.round(4.5)); // 5
// console.log(Math.round(4.4)); // 4
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.sqrt(25));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log((Math.random() * 10) + 1);

let bet1_2 = Math.random() * 2 + 1;
// console.log(bet1_2)
// console.log(Math.floor(bet1_2));

// console.log(Math.floor(Math.random() * 2) + 1);

// console.log(Math.floor(Math.random()) * 10 + 1);

const min = 10;
const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// console.log(Math.random() * max); // 0 - 19
// console.log(Math.random() * max - min);
// console.log(Math.random() * max - min + 1);
// console.log(Math.random() * (max - min + 1) + min);
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

///------------------------------------ can ignore below

let ranNum = Math.random() * max; // step1

ranNum = Math.random() * max - min; // step2

ranNum = Math.random() * max - min + 1; // step3

ranNum = Math.random() * (max - min + 1) + min; // step4

ranNum = Math.floor(Math.random() * (max - min + 1)); // step5

ranNum = Math.floor(Math.random() * (max - min + 1) + min); // step6
// console.log(ranNum); // 10 - 20

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let ranNumStep = Math.random() * max - min; // -9.xyz - 9.xyz  : = 0.xyz1 - 0.9999xxyz * 10

ranNumStep = Math.floor(ranNumStep); // -9 - 9

ranNumStep += 1; // -8 - 10

ranNumStep += min; //  1 - 20

console.log(ranNumStep); // 1 - 20
