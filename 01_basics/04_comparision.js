///MUST KNOW truthy falsy values

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1); ///numaric coercian for "2", "02", so at the end js compaired number to number

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0); ///!ntresting

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// // === strict equality checks !===
// console.log("2" === 2);

///logical
// console.log(3 < 5 && 9 < 3) /// false & false
console.log(4 || 0); /// go deeper into || operator , truthy & falsy
// console.log(4 && 0)
// console.log(0 || 4)
console.log(0 && 4); ///find why this opartion evaluates 0

///Ternary
// (condition: boolean result) ? (boolean true: code) : (boolean false: code)
