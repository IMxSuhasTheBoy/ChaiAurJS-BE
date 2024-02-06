/// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        console.log("5 is best number");

        // continue;
    }
    console.log(element);
    
}

// console.log(element); ///trying to access above block scoped variable

for (let i = 1; i <= 10; i++) {
    console.log(`Outerloop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    console.log(`Innerloop value ${j} & this innerLoop no is ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j );
    // console.log(`${i} * ${j} = ${i*j}`)
   }
    
}


let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

/// Iterate through each element in the array using a for loop
for (let index = 0; index < myArray.length; index++) {

    /// Declare a constant variable element and assign it the value of the current array element
    const element = myArray[index]; ///note that the constantness applies only to the variable itself, not the value it holds.

    /// Print the current element in the loop
    console.log(element);
}


// break and continue
/// break: on condition met the nearest loop terminates
/// continue: on conditon met the current iteration skips, loop contineues from next iteration

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5, break keyword`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i is ${index}`);
    
// }