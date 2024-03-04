////Here's a basic example that showcases all three programming paradigms (procedural, object-oriented, and functional) in JavaScript:.(thanks to chatGPT)

///Procedural Programming
function greet(name) {
  return "Hello, " + name + "!";
}

// Object-Oriented Programming
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hello, " + this.name + "!";
  }
}

// Functional Programming
const greetFunctional = (name) => {
  return "Hello, " + name + "!";
};

// Usage
const name = "John";

// Procedural
// console.log(greet(name));

// Object-Oriented
const person = new Person("name");
// console.log(person.greet());

// Functional
// console.log(greetFunctional(name));

///------------------------------------------------
const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database");
    console.log(`Username: ${this.username}`);
    console.log(this);
  },
};
//console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this); //epmty object

///Constructor function
function User(username, loginCount, isLoggedIn) {
  ///inserting below key(variables) values in empty Object of new keywords instance created on a constructor fun call
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  // console.log(this);

  this.greeting = function () {
    console.log(`Welcome ${this.username}`); //using current context flowlessly
    if (isLoggedIn) {
      console.log(`${this.username} is logged in `);
    } else {
      console.log(`${this.username} isn't logged in`);
    }
  };

  return this; //no need to explicitly return
}

// const userOne = User("hitesh", 12, true)
// const userTwo = User("ChaiAurCode", 11, false)
// const userThree = User("myPractice", 14, true)

const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
const userThree = new User("myPractice", 14, true);

// console.log(userThree)

// console.log(userOne, userTwo)
console.dir(userOne.constructor); // reference of itself

console.log(userThree.greeting()); ///see constructor log

// instanceof method
