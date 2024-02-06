// console.log(accountId) ///Undeclared refers to the variable state when a variable is used before it is formally declared or assigned a value. It typically leads to an error.
// console.log(first) ///Undefined refers to the variable state when it exists in the scope, but during the execution phase, it has not been assigned a value yet.

var first; ///var is Hoisted. to the top during the parsing phase

const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur"; ///autoglobal : "use strict" directive enables strict mode.
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
