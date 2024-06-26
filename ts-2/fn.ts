//declare function with annotation for parameters and return type
function fnForNumber(x: number, y: number): number {
  return x + y;
}
const addTwoAndThree = fnForNumber(2, 3); //function instantiation
const addThreeAndThree = fnForNumber(3, 3);
// console.log(addThreeAndThree);
// console.log(addThreeAndThree);
//////////////////////////////////////////////
//function annotation for parameters and return type
let fnToMultiply: (x: number, y: number) => number;
fnToMultiply = function (num1, num2) {
  return num1 * num2;
};
// console.log(fnToMultiply(2, 4));
/////////////////////////
//enum
enum Month {
  Jan = 1,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}
function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}
// console.log(Month);
// console.log(isItSummer(Month.Jun));
// console.log(isItSummer(9));
////////////////////////////////////
//* function return random number between two numbers inclusive

export function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(randomNumber(5, 10));
///////////////////////////////////////
//*type guards with typeof operator
type unionTypeEx = number | string;

function demoTypeGuardAddOrConcat(val1: unionTypeEx, val2: unionTypeEx) {
  if (typeof val1 === "string" && typeof val2 === "string") {
    console.log(val1.concat(val2));
  } else if (typeof val1 === "number" && typeof val2 === "number") {
    console.log(val1 + val2);
  } else {
    console.log("invalid input");
  }
}
/////////////////////////////////////////
//*type guards with instanceof operator
class Dog {
  bark(): void {
    console.log("barking");
  }
}
class Cat {
  meow(): void {
    console.log("meowing");
  }
}

function demoTypeGuardAnimaSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else if (animal instanceof Cat) {
    animal.meow();
  }
}

//////////////////////////////////////
class Customer {
  private creditStatus: boolean;
  constructor() {
    // Randomly set the credit status to true or false
    this.creditStatus = Math.random() < 0.5;
  }
  /**
   * Checks if credit is allowed for the customer.
   * @returns {boolean} True if credit is allowed, false otherwise.
   */
  isCreditAllowed(): boolean {
    return this.creditStatus;
  }
}

class Supplier {
  private shortList: boolean;

  constructor() {
    // Randomly set the shortlist status to true or false
    this.shortList = Math.random() < 0.5;
  }

  /**
   * Checks if  the supplier is in shortlist.
   * @returns {boolean} True if is in shortlist, false otherwise.
   */
  isInShortList(): boolean {
    return this.shortList;
  }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner): string {
  let message: string = "";
  if (partner instanceof Customer && "isCreditAllowed" in partner) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue!";
  } else if (partner instanceof Supplier && "isInShortList" in partner) {
    message = partner.isInShortList()
      ? "Sign a new contract the supplier"
      : "Need to evaluate further!";
  } else {
    message = "Unknown partner type";
  }

  return message;
} //!implement user defined type-guards

// console.log(signContract(new Supplier()));
// console.log(signContract(new Customer()));
//////////////////////////////////////////////
