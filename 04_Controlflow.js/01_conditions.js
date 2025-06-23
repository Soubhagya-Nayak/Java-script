// if
const isUserLoggedIn = true
const temperature = 41

if(2 == "2") {
    // console.log("Executed");
}
if(2 === "2") {
    // console.log("Executed");
}
// >, <, <=, >=, ==, !=, ===

if (temperature === 41) {
    // console.log("Less Than 50");
} else {
    console.log("Temperature is greater than 50")
}


const score = 200
if (score > 100) {
   const power = "fly"
//    console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`);

const balance = 1000
// if(balance > 500) console.log("test"); // implicit scope without curly braces.

if (balance < 500) {
    // console.log("less than");
} else if (balance < 750) {
    // console.log("less than 750");
} else {
    // console.log("Not in Case");
}


const userLoggedIn = true
const debitCard = true
const age = 16
if (userLoggedIn && debitCard && age >= 16) {
    // console.log("Allow to buy Course");
}


const loggedInFromGoogle = false
const loggedInFromEmail = true
const guestUser = true
if (loggedInFromEmail || loggedInFromGoogle || guestUser) {
    console.log("User LoggedIn");
}