const user = {
    username: "Soubhagya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log("Got the User Daetails from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log();


const promiseOne = new Promise((resolve, reject) => {})
const date = new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount;

    this.greeting = function() {
        console.log(`welcome ${this.username}`); 
    }

    return this
}

const userOne = new User("Hitesh", 12, true)
const userTwo = new User("Soubhagya", 11, false)
// console.log(userOne);
// console.log(userTwo);

console.log(this.constructor);
