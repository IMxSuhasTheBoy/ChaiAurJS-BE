// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr2)
// console.log(myArr[1]);

// -----------Array methods------------

myArr2.push(6)
console.log(myArr2)
myArr2.push(7)
console.log(myArr2)
myArr2.pop()
console.log(myArr2)
myArr2.unshift(9)   // not optimal way
console.log(myArr2)
myArr2.shift()
console.log(myArr2)

// console.log(myArr2.includes(9));

// console.log(myArr2.indexOf(4));
// console.log(myArr2.indexOf(7));

// const newArr = myArr2.join()

// console.log(myArr2);
// console.log( `${newArr} .join converted an into ${typeof newArr}`);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B ", myArr);

//------------------------

const myn2 = myArr.splice(1, 3)  // returns sub array including del count, changes original array (ref.)
console.log("C ", myArr); // original array with leftover ele
console.log(myn2); // got sub string 
