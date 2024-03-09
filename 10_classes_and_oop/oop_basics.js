//TODO: Modifying prototypes of contructor function
function makeObj(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

//* Adding a method to prototype
makeObj.prototype.getFullName = function () {
  return `Full Name: ${this.firstName} ${this.lastName}`;
};

//* Instantiation with new keyword with their own properties and methods.
const User1 = new makeObj("Brave", "Boy");
console.log(User1.getFullName());

const rain = new makeObj("Rain", "Storm");
console.log(rain.getFullName());

//TODO: Creating Objects with Factory Function
function createPerson(firstName, lastName) {
  return {
    firstName,
    lastName,
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

const jane = createPerson("Jane", "Smith");
console.log(jane.getFullName());

//!class declarations are not hoisted.
//TODO: ES6 class contructors to do easier & cleaner with inheritance of js.
class Animal {
  constructor(name, isPetAnimal) {
    this.name = name;
    this.isPetAnimal = isPetAnimal;
  }

  speak() {
    this.isPetAnimal
      ? console.log(`${this.name} can be your pet.`)
      : console.log(`${this.name} cannot be your pet.`);
  }
}

const dog = new Animal("Dog", true);
dog.speak();

//TODO: ES6 classes support inheritance through the extends keyword and the super keyword to call the constructor of the parent class. extends is used to create a subclass
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calling the parent class constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} (a ${this.breed}) barks.`);
  }
}

const goldenRetriever = new Dog("Buddy", "Golden Retriever");
goldenRetriever.speak(); // Buddy (a Golden Retriever) barks.

/*Conclusion
JavaScript OOP offers multiple ways to create and structure objects,
allowing you to design scalable and organized applications. Whether you choose 
prototypes,
factory functions,
constructors,
or ES6 classes.
*/
