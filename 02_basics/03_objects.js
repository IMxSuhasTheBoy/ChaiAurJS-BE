// singleton :  made from constructor only
// Object.create : constructor

//------------------------

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    myS: "mykey1- im normal",
    [mySym]: "mykey2 im ref. from symbol", 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // dotNotation not preferd way to access, won't work with key's of other data type. 
// console.log(JsUser["email"]) // betterr way to access, work's with key's of any data type
// console.log(JsUser["full name"]) //  key of string type 
// console.log(JsUser["myS"]) // normal string type key
// console.log(JsUser[mySym])  // symbol syntax for use as key 

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  // changes to obj are locked 
JsUser.email = "hitesh@microsoft.com"  // won't give arr for trying to manipulate 
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

// console.log(JsUser)

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());