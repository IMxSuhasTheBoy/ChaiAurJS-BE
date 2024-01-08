const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // refering curr context, accessing key of its parent scope 
      //  console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);        // in node env. global obj -> empty obj | in browser global obj is window

// function chai1(){
//     let username = "hitesh"
//     console.log(this.username); // not refering 
// }

// chai1()

function kak() {
    console.log(this)
}
// kak()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }                                   // explicit ret

// const addTwo = (num1, num2) =>  num1 + num2    // implicit ret

// const addTwo = (num1, num2) => ( num1 + num2 )   // react syntax usecase

// const addTwo = (num1, num2) => ({username: "hitesh"})  //  -->( returning obj  )<--


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()