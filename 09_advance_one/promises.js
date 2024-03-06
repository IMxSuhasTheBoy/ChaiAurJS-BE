///Docs: A Promise is an object representing the eventual completion or failure of an asynchronous operation.

///Createing promises
///promises can reduce callback hell
// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()                    ///connects to resolve with .then . promise consumption is given with this context of resolve, passed to .then
//     }, 1000)
// })
///

// //---------- without storing in a variable, promise cunsumption with .then

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

///
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })
///

///
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"}) // passing data to .then using resolve()
//     }, 2000)
// })

// promiseThree.then(function(user){       // parameter received data
//     console.log( user);
// })
///

///
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 3000)
// })// promiseFour
// .then( (user) => {  // got data in parameter
//     // console.log(user)
//     return user.username       /// chaining :- passing further returned
// })
// .then((userName)=>{          // got returned data in parameter
//     console.log(userName)
//     console.log("success the data is fetched");
// })
// .catch((error)=>{            // got reject/error case in parameter
//     console.log(error, "failure!!! fetching data")
// })
// .finally(()=> console.log(`The promise is either resolved or rejected`))  // default executing, notifiy kinda after promise states
///

///
// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "javascript", password: "123" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 2000);
// });
// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive()
///

//------------------------try catch syntax---
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(typeof response);

    // console.log(response, "\n");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}
// getAllUsers();
//------------------------try catch syntax---

const request = new Request("https://api.github.com/users/hiteshchoudhary");

// above same work with fetch------------
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data);
  })
  .catch((error) => {
    console.log(`error data fetching ${error}`);
  });

// fetch("https://api.github.com/users/IMxSuhasTheBoy")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(`error data fetching ${error}`));

// fetch does it's work immidietly after completion unlike, async await*

// A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

/// promise.all
// yes this is also available, kuch reading aap b kro.

///*Exapmples
const doFetch = async () => {
  try {
    // let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';

    // let response = await fetch(url);
    // let commits = await response.json(); // read response body and parse as JSON
    // console.log(commits[0].author.login);

    let response2 = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
    // get one header
    console.log(response2.headers.get('Content-Type')); // application/json; charset=utf-8
    // iterate over all headers
    for (let [key, value] of response2.headers) {
      console.log(`${key} = ${value}`);
    }

  } catch (error) {
      console.log(error)
  }
}


doFetch()

// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//   .then(response => response.json())
//   .then(commits => console.log(commits[0].author.login));
///*