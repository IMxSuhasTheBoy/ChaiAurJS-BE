class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
//TODO: may have to make the user an Admin/Teacher... with additonal methods over the user methods
class Teacher extends User{
    //*optionally overriding the constructor of user
    constructor(username, email, password){
        super(username)// alternative to call & this syntax, in this case
        this.email = email
        this.password = password
    }

    addCourse(couseName){
        console.log(`A new course was added by ${this.username} - ${couseName}`);
    }
}

// const chai = new User("chai", "chai@teacher.com", "123");
const chai = new Teacher("chai", "chai@teacher.com", "123")

// chai.addCourse("Js-Be");

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof Teacher);