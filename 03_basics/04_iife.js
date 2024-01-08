// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();                                        // decleard & invoked as soon as file runs

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')                                  // taken parameter on invocation arg

