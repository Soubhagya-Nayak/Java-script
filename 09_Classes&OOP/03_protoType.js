let myName = "Soubhagya    "
// console.log(myName.trueLength());

let myHero = ["Thor", "Panther"]
let heroPower = {
    thor: "Hammer",
    panther: "Suite",

    getPanther: () => {
        console.log(`Panther Power ${this.panther}`);
    }
}

Object.prototype.soubhagya = function() {
    console.log(`Soubhagya is present in all Objects`);
    
}
heroPower.soubhagya();
myHero.soubhagya();


const User = {
    name: "Soubhagya",
    mail: "soubhagya@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeacheringSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeacheringSupport
}

Teacher.__proto__ = User


// Modern Syntax
Object.setPrototypeOf(TeacheringSupport, Teacher)

let anotherUsername = "Soubhagya     "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}
anotherUsername.trueLength()
"Soubhagya".trueLength()
"iceTea".trueLength()