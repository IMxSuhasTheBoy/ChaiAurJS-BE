/// if

const isUserloggedIn = true
const temperature = 65

if ( temperature < 50 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}       


// console.log("Execute");try following checks in the above if else code
// <, >, <=, >=, ==, !=, ===, !==

const score = 200

// if (score > 100) {
//     let power = "fly" ///block scoped defined variable
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); ///trying to access block scoped variable


const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");  /// bad practice 

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }

// if(1 == true){ console.log("first")};



// let aAge = 80;
// let bAge = 9000;
// let cAge = 1008;

// if ( aAge > bAge && aAge > cAge){
//     console.log("A")
// }
// else if ( cAge > aAge && cAge> bAge){
//     console.log("C")
// }
// else if ( bAge > aAge && bAge > cAge){
//     console.log("B")
// } else{
// console.log("all are same")
// }
 
let aAge = 8;
let bAge = 9;
let cAge = 39;

const ages = [aAge, bAge, cAge];
const maxAgeIndex = ages.indexOf(Math.max(...ages));
console.log(maxAgeIndex)

if (maxAgeIndex === 0) {
  console.log("A");
} else if (maxAgeIndex === 1) {
  console.log("B");
} else if (maxAgeIndex === 2) {
  console.log("C");
}
