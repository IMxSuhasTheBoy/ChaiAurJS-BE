
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName ---  reference 
// sayMyName()  // ---  exicution

// function addTwoNumbers(number1, number2){
//     console.log(`${number1 + number2}`);
// }

// addTwoNumbers(2, 4)

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2 
    // Unreachable code
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){ // if parameter have value default para will override
    // when username is undefined, below if block conditon -> true , but we have defaul para value so, username never gona bee empty in the func block for use
    if(!username){             
        console.log("PLease enter a username");
        return  // just for exit the func when if block true
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage()) // nothing as arg - so its undefined 
// console.log(loginUserMessage("hitesh")) 


//------shopping cart ex. indefinite values in para----
//                                      ↓rest operator used
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})  // obj as arg

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 800, 500, 1000]));  // arr as arg



// ret, rest, default para, obj/arr as arg 