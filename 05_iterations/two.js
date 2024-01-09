
let index = 0
while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2
}

let myArray = ['flash', "batman", "superman"]

let arrIdx = 0 ///globally defined variable
while (arrIdx < myArray.length) {
    console.log(`Value is ${myArray[arrIdx]}`);
    arrIdx = arrIdx + 1  ///updating the global variable 👍
}

let score = 11
// score = 1

do {
    // console.log(`Score is ${score}`);
    score++
} while (score <= 10);