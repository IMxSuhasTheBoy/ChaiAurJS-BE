const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (val){
//     console.log(val);
// } )                             // method: callback (normal func)

// coding.forEach( (item) => {
//     console.log(item);
// } )                             //  method: callback (arrow func)

function printMe(item) {
  console.log(item);
}

// coding.forEach(printMe)        // call a func as for execution

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )                               // getting all possible details

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  // console.log(item.languageFileName , "a");
  // console.log(item.languageName, "b")
});
