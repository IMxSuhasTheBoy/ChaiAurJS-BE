class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ ///! used avoid access of the method to be included the in instance
        return `123`
    }
}

const hitesh = new User("hitesh")
// hitesh.createId()
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
console.log(iphone.email)
// console.log(iphone.createId());