// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()                    // promise consumption is given with this, passed to .then
//     }, 1000)
// })

// //---------- without storing in a variable, promis cum=nsuption

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"}) // passing data to .then using resolve()
//     }, 2000)
// })

// promiseThree.then(function(user){       // parameter received data
//     console.log( user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 3000)
// })

// promiseFour
// .then( (user) => {  // got data in parameter
//     // console.log(user)
//     return user.username       // passing further , chaining
// })
// .then((userName)=>{          // got data in parameter
//     console.log(userName)
// })
// .catch((error)=>{            // got reject/error case in parameter
//     console.log(error)
// })
// .finally(()=> console.log(`The promise is either resolved or rejected`))  // default executing, notifiy kinda after promise states

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 2000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

//------------------------try catch syntax---
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(typeof response)

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()
//------------------------try catch syntax---

// above same work with fetch------------
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //console.log(data)
  })
  .catch((error) => {
    // console.log(`error data fetching ${error}`)
  });

fetch("https://api.github.com/users/IMxSuhasTheBoy")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(`error data fetching ${error}`));

// fetch does it's work immidietly after completion unlike, async await*

// // promise.all
// // yes this is also available, kuch reading aap b kro.
