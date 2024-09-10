// Primitives are 7 types: 
// String, Number, Boolean, null, Undefined, bigInt, Symbol

let num = 100;
let age = 18;
let str = "Soubhagya";
let value = null;
let topic = "";
let bigNumber = 12345678645679789n;
let isPrime = true;

const score = Symbol('3345');
const anotherScore = Symbol('3345');
// console.log(score === anotherScore);


// Reference (not Primitives):
// Array, Object, Function

const Heros = ["JayHanuman", "BholeShivShankar", "JayJagannath", "JayTariniMaa", "JayMangalaMaa"];

const obj = {
    name: "Soubhagya",
    age: 18,
    course: "javaScript"
}

const myFunction = () => {
    console.log("It is my Function.");
}

// console.log(typeof bigNumber);

// ++++++++++++++++++++++++++++++++++++++++++++++++++ //

// Stack(Premetive) and Heap(NonPremetive)

let myName = "Soubhagya";
let anotherName = myName;
anotherName = "Hitesh";

// console.log(myName);
// console.log(anotherName);

let userOne = {
    name: "Soubhagya",
    upi: "abc@ybl",
    mailId: "soubhagya@gmail.com"
}

let userTwo = userOne;
userTwo.upi = "cda@ybl";

console.log(userTwo);
console.log(userOne);