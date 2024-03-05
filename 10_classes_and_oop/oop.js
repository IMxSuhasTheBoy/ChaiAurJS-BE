///Here's a basic example that showcases all three programming paradigms (procedural, object-oriented, and functional) in JavaScript:.(thanks to chatGPT)
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

// Object-Oriented                 instantiation
const person1 = new Person("name");
const person2 = new Person(name);
console.log(person2.greet());
console.log(person1.greet());

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
console.log(userOne)
const userTwo = new User("ChaiAurCode", 11, false);
const userThree = new User("myPractice", 14, true);

// console.log(userThree)

// console.log(userOne, userTwo)
console.dir(userOne.constructor); // reference of itself

console.log(userThree.greeting()); ///see constructor log

// instanceof method - explore


//Example/Let's consider a Product class that represents products in an e-commerce application:
class Product {
  constructor(name, price, category, description) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.description = description;
    this.stock = 0;
  }

  addToStock(quantity) {
    this.stock += quantity;
    return `${quantity} ${this.name}(s) added to stock. Total stock: ${this.stock}`;
  };

  sell(quantity) {
    if (this.stock >= quantity) {
      this.stock -= quantity;
      return `${quantity} ${this.name}(s) sold. Remaining stock: ${this.stock}`;
    } else {
      return `Insufficient stock. Available stock: ${this.stock}`;
    }
  };

  getProductInfo() {
    return `Name: ${this.name}, \n Price: $${this.price}, Description: ${this.description}, Category: ${this.category}, Stock: ${this.stock}`;
  }
}

///Usage1
const laptop = new Product("Laptop", 999.99, "Electronics"); ///instantiation
console.log(laptop)
console.log(laptop.addToStock(10)); // Add 10 laptops to stock
// console.log(laptop.sell(5)); // Sell 5 laptops
// console.log(laptop.getProductInfo()); // Get product information
//Usage2
const charger = new Product("Charger", 49.99, "eAccesories", "24w AC Asian Veriant");
console.log(charger)

// In this example:

// - We define a `Product` class with a constructor that takes `name`, `price`, and `category` parameters to initialize a new product object.
// - The `Product` class also has methods like `addToStock`, `sell`, and `getProductInfo` to manage the product's stock and provide information about the product.
// - We create an instance of the `Product` class called `laptop` with the name "Laptop", price $999.99, and category "Electronics".
// - We then use methods like `addToStock` and `sell` to manage the stock of the laptop product.
// - The `getProductInfo` method allows us to retrieve information about the laptop product, including its name, price, category, and stock level.

// This example demonstrates how class constructors and methods can be used to model real-world entities like products in an e-commerce application, providing functionality to manage stock and retrieve product information.
///-------

//Example/
function E_vehicle(company, price, description, model, isLaunched){
  this.company = company;
  this.price = price;
  this.description = description;
  this.model = model;
  this.isLaunched = isLaunched;
  this.stock = 0;

  this.addToStock = function(quantity){
    this.stock += quantity;
    return `${quantity} of ${this.company}'s ${this.model}(s) added to stock. Total stock: ${this.stock}`;
  };
  
  this.getInfo = function(){
    return `Name: ${this.model}, Price: $${this.price}, Description: ${this.description}, Company: ${this.company}, Stock: ${this.stock}`;
  };
  
  this.sell = (quantity) => {
    if (isLaunched) {

      if (this.stock >= quantity) {
        this.stock -= quantity;
        return `|${quantity}x| ${this.model}(s) sold. Remaining stock: ${this.stock}`;
      } else {
        return `Insufficient stock. Available stock: ${this.stock}`;
      }

    } else {
      return `${this.company}: ${this.model} isn't launched yet in your country.`;
    }
  };

}

///Usage1
const ev1 = new E_vehicle("ather", 55.55, "2 passengers e scooter", "E450", true);
console.log(ev1.addToStock(30));
console.log(ev1.getInfo())
console.log(ev1.sell(10))
console.log(ev1.getInfo())
///