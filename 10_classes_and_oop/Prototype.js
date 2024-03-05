// let myName = "hitesh     "
let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(gotit){
    console.log(`hitesh is present in all objects ${this.gotit} ${gotit} ${this.thor}`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}
// console.log(heroPower.hitesh("sds"))


// heroPower.hitesh()
// myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh()

//TODO: inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false,
    canTakeBreak: "true"
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

console.log(typeof TeachingSupport.canTakeBreak);

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

console.log( TeachingSupport.makeVideo);
////////////////////////////////////////////////////////////////

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`"${this}"`);
    // console.log(`Length is: ${this.length}`)
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"     iceTea".trueLength()
mychannel.trueLength()