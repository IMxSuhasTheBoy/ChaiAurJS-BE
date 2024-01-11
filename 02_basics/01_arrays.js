// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr2)
// console.log(myArr[1]);

// -----------Array methods------------

myArr2.push(6)
// console.log(myArr2)
myArr2.push(7)
// console.log(myArr2)
myArr2.pop()
// console.log(myArr2)
myArr2.unshift(9)   // not optimal way
// console.log(myArr2)
myArr2.shift()
// console.log(myArr2)

// console.log(myArr2.includes(9));

// console.log(myArr2.indexOf(4));
// console.log(myArr2.indexOf(7));

const newArr = myArr2.join()

// console.log(myArr2);
// console.log( ` .join() returned a ${typeof newArr} ${newArr}`);
// console.log(newArr)

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) ///returns new array
console.log(myn1); 

console.log("B ", myArr); ///original array isnt affected, 

//------------------------

const myn2 = myArr.splice(1, 3)  // returns sub array including del count, changes original array (ref.)
console.log("A ", myArr); // original array with leftover ele
console.log(myn2); // got sub string 
