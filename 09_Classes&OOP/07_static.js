class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`UserName: ${this.username}`);        
    }
    createId() {
        return `134`
    }
}

const soubhagya = new User("Soubhagya")
console.log(soubhagya);

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());
