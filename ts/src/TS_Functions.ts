//Optional para
function greetPerson(name: string, age: number): string {
  return age ? `Hello, ${name}! You are ${age} years old.` : `Hello, ${name}!`;
}
//Default para
function getDiscount(price: number, percentage: number = 10): number {
  return price * (percentage / 100);
}
//Rest para
function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}
//default values in functions
function studentInfo(studentName: string, studentId: number, studentClass: number = 12): void {
  console.log(studentName, studentId, studentClass);
}///function is defined with a return type of void, indicating that it does not return any value


//Generic type para
function printArray<T>(arr: T[]): void {
  arr.forEach(item =>{
    console.log(item);
  });
}///Usage
const numbers = [1, 2, 3];
const strings = ["hello", "world"];
printArray(numbers);
printArray(strings);

//Optional type specified
function displayData(...args: (string | object)[]) {
  args.forEach(arg => {
    ///Check if the argument is a string
    if(typeof arg === "string") {
      console.log("String:", arg);
    }
    ///Check if the argument is an object
    else if (typeof arg === "object") {
      console.log("Object:", arg);
    }
  });
}///Call the function with a combination of strings and objects
displayData("Hello", { name: "John", age: 30 }, "World", { city: "New York", population: 8000000, titals: { first: 2012, second: 2014 } });


////---------------------------------------------ex-------------------------------------------------
// Define the function with an optional parameter for access and a return type of object containing otp
function getOTP(access?: boolean): { otp: number; message: string } {
  // Check if access is provided and true
  if (access === true) {
    // Generate a random OTP
    const otp = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit OTP
    // Return the OTP along with a success message
    return { otp, message: "OTP generated successfully!" };
  } else {
    // Return an error message if access is not provided or false
    return { otp: 0, message: "Access denied! OTP generation failed." };
  }
}
// Call the function with true to generate OTP
const result = getOTP(true);
// Log the result
console.log(result);
/***refactored variant:
  function getOTP(access: boolean): { otp: number; message: string } {
    const otp = Math.floor(Math.random() * 10000); // Generate a random 4-digit OTP
    const message = access ? "OTP generated successfully" : "OTP generation failed";
    return { otp, message };
  }

  const { otp, message } = getOTP(true);
*/
////---------------------------------------------------------------------

// Function to process order and return order details along with shipping information
function processOrder(
  orderId: number,
  items: string[],
  address: [string, string, string]
): [number, string[], [string, string, string]] {
  // Process the order
  console.log(`Processing order ${orderId}...`);
  // Simulate shipping information
  const shippingInfo: [string, string, string] = [
    ...address
  ];
  // Return order details and shipping information as tuple
  return [orderId, items, shippingInfo];
}

// Example usage
const orderId = 1001;
const items = ["Product 1", "Product 2", "Product 3"];
const address: [string, string, string] = [
  "John Doe",
  "123 Main St",
  "Cityville",
];// Example usage

const [processedOrderId, processedItems, shippingAddress] = processOrder(
  orderId,
  items,
  address
);
console.log(shippingAddress)

console.log(`Order ${processedOrderId} processed successfully.`);
console.log(`Items: ${processedItems.join(", ")}`);
console.log(`Shipping Address: ${shippingAddress.join(", ")}`);
////---------------------------------------------------------------------------------------



function pattern(rows: number) : void{

  for (let i: number = 1; i <= rows; i++) {
    console.log(i)
    let str: string = ""
    for (let j: number = 1; j <= i; j++){
      console.log(j)
      str += " * "
    }
    console.log(str)
  }
}
pattern(4)

const logPattern = (n: number, total: number) => {
  let str: string = "";

  // Add spaces before the asterisks
  for (let j: number = 0; j < total - n - 1; j++) {
    str += " ";
  }

  // Add asterisks
  for (let i: number = 0; i < 2 * n + 1; i++) {
    str += "*";
  }

  // Print the pattern
  console.log(str);
};

const callLogPattern = (m: number) => {
  for (let i: number = 0; i < m; i++) {
    logPattern(i, m);
  }
};

callLogPattern(5);


////--------------------------------------------


function fibonacci(n: number) {
  let fibSeries = [0, 1]; // Initialize the series with the first two Fibonacci numbers
  
  // Generate the Fibonacci series up to the nth number
  for (let i: number = 2; i < n; i++) {
    // Calculate the next Fibonacci number by summing up the last two numbers
    let nextNum: number = fibSeries[i - 1] + fibSeries[i - 2];
          console.log(i)
    console.log(nextNum)
    fibSeries.push(nextNum);
  }
  
  return fibSeries;
}
console.log(fibonacci(10))
/////------------------------------------------------------

////Closures ex: pass arguments to the createHelloWorld function and use those arguments within the returned inner function. This is a common use case for closures

var createHelloWorld = function(greeting: string) {
  return function(name: string) {
      return `${greeting}, ${name}!`;
  };
};

const greetWithHello = createHelloWorld("Hello");
const greetWithHi = createHelloWorld("Hi");

console.log(greetWithHello("Alice")); // Output: Hello, Alice!
console.log(greetWithHi("Bob"));      // Output: Hi, Bob!
///----------------------------------------------------------