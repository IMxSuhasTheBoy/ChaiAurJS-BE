//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);
///------------------------

const work = "teaching"
function one(){
    console.log(work)
    const username = "hitesh"

    // var work = "testing"
    // let work = "testing"
    // const work = "testing"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

one()
///-----------------------



if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        //  console.log(username + website);
    }
    // console.log(website);
}

//  console.log(username);


// // ++++++++++++++++++ interesting ++++++++++++++++++
// ------------hoisting func------

console.log(addone(5))

function addone(num){
    return num + 1
}
///---------------


// addTwo(5)       // func expression , trying to access it but it's decleared later
const addTwo = function(num){
    return num + 2
}


////--------------------Autoglobals
function printMathsMarks() {
    console.log("myName"); // Output: arvind
    englishMarks = 98; // Autoglobal: JavaScript assigns it to the global scope
    console.log(englishMarks); // Output: 98
  }
  
  printMathsMarks();

  console.log(englishMarks); // Output: 98


  ///-----------------------

  var myName = "arvind"; //global scope

function printName() {
  console.log(myName); //undefined
 
  var myName = "arvind pandit"; //scope of printName
  //const/let myName = "arvind pandit"; //scope of printName
  console.log(myName);
 
}

console.log(myName);
printName();