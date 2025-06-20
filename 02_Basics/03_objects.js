// singleton

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Soubhagya",
    age: 20,
    "fullname": "Soubhagya Nayak", 
    [mySym]: "myKey1", // -> if you reffered a symbol then use [key] in key.
    email: "soubhagya@gamil.com",
    isLoggedIn: false,
    location: "jagatsinghaPur",
    lastloginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email) //-> Bad practice to access object values
console.log(JsUser["email"]) //-> Good practice
console.log(JsUser["fullname"]) // -> full name cannot accessable by . method
console.log(JsUser[mySym]); // -> Accessing key

JsUser.email = "soubhagya@yahoo.com"
// Object.freeze(JsUser);
JsUser.email = "soubhagya@soa.co.in"
console.log(JsUser);

JsUser.greeting = function() {
    console.log(`Hello, JS Users, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());

