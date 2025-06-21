// Global Scope
var c = 12 // We have to avoid Var

let a = 300
if (true) { // Block Scope
    let a = 20
    const b = 32
    var c = 56
    // console.log("Inner: ", a);
}
// console.log("Outer: ", a);
// console.log(b);
// console.log(c);




function one() {
    const username = "Soubhagya"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if (true) {
    const username = "Soubhagya"
    if (username === "Soubhagya") {
        const website = " GitHuub"
        console.log(username + website);
    }
    // console.log(website); // -> Outer Scope Call
}
// console.log(username); // -> Outer scope Call


// +++++++++++++++++++++ intresting +++++++++++++++++++++
console.log(addOne(5)) // -> Accessable
function addOne(num) {
    return num + 1
}
console.log(addOne(5)) // -> Accessable

// console.log(addTwo(5)) // -> Not Accessable
const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(5)) // -> Accessable