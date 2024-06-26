class Person {
  private _firstName: string;
  protected _lastName: string;

  public get firstName() {
    return this._firstName;
  } //accessor
  public get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  public set fullName(name: string) {
    let parts: string[] = name.split(" ");
    if (parts.length != 2) {
      throw new Error("Invalid name format: first last");
    }
    this._firstName = parts[0];
    this._lastName = parts[1];
  } //mutator
}

class Employee extends Person {
  static headCount = 0;
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    super();

    this.fullName = `${firstName} ${lastName}`;

    Employee.headCount++;
  }

  public introduce(): string {
    return `Hello, my name is ${this.fullName} and I work as a ${this.jobTitle}.`;
  }

  public static getHeadCount(): number {
    return Employee.headCount;
  }
}

let employee = new Employee("Hitesh", "Choudhary", "Programmer");

console.log(employee.introduce());

let person = new Person();
person.fullName = "Hitesh Choudhary";

console.log(person.firstName, person.fullName);

console.log(Employee.getHeadCount());

////////////////////////////////////////////////////
//* generic class
class Stack<T> {
  private elements: T[] = []; //This is a private property that holds the elements of the stack.

  constructor(private size: number) {}

  isEmpty() {
    return this.elements.length === 0;
  }

  isFull() {
    return this.elements.length === this.size;
  }

  push(element: T) {
    if (this.elements.length >= this.size) {
      throw new Error("Stack is full");
    }

    this.elements.push(element);
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.elements.pop();
  }
}

let stackOfNumbers = new Stack<number>(5);

export function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

while (!stackOfNumbers.isFull()) {
  let n = randomNumber(1, 10);
  console.log(`Push ${n}.`);
  stackOfNumbers.push(n);
}
// console.log(stackOfNumbers2);

while (!stackOfNumbers.isEmpty()) {
  let n = stackOfNumbers.pop();
  console.log(`Pop ${n} from the stack.`);
}
//using string array for stack ex.
let words = "The quick brown fox jumps over the lazy dog".split(" ");

let wordStack = new Stack<string>(words.length);

words.forEach((word) => wordStack.push(word));

while (!wordStack.isEmpty()) {
  console.log(wordStack.pop());
}

////////////////////////////////////////////
//simple ex for generic class
class Box<T> {
  private content: T;

  constructor(initialContent: T) {
    this.content = initialContent;
  }

  getContent(): T {
    return this.content;
  }

  setContent(newContent: T): void {
    this.content = newContent;
  }
}

// let boxOfStrings = new Box<string>("mymy");
// console.log(boxOfStrings.content);
