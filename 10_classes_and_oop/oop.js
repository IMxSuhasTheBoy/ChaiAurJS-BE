const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }

}


//console.log(user.username)
// console.log(user.getUserDetails());
console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        if (isLoggedIn){
            console.log(`${this.username} is logged in `);
        } else {
            console.log(`${this.username} isn't logged in`);
        }

    }

    return this //no need to explicitly return
}




const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne, userTwo)
console.dir(userOne.constructor); // reference of itself
// console.log(userTwo);

// console.log(userOne.greeting())

// instanceof keyword 