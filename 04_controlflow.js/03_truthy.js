const userEmail = "soubhagya234@gmail.com"
if (userEmail) {
    // console.log("Got the User Email");
} else {
    // console.log("Don't have user Email");    
}

// Falsy Value
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// Truthy Value
// True, "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    // console.log("Array is Empty");    
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is Empty");    
}


// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = undefined ?? 10 ?? 20
// console.log(val1);


// Terniary Operator
// Condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 90") : console.log("more than 80");
