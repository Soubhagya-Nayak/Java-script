let name = "Soubhagya";
let repoCount = 5;

console.log(`My name is ${name} and my number of reposetory are ${repoCount}`);

const getName = new String("Soubhagya-Battle-grounds");
// console.log(getName[0]);
// console.log(getName.length);

// console.log(getName.toUpperCase());
// console.log(getName.toLowerCase());
// console.log(getName.charAt(6));
// console.log(getName.indexOf('b'));

const newName = getName.substring(0, 5);
console.log(newName);
const anotherName = getName.slice(-8, 9);
console.log(anotherName);

let nameOfCompany = "     Soubhagya-Nayak     ";
console.log(nameOfCompany.trim(" "));
console.log(nameOfCompany.replace("-", " "));


console.log(getName.includes("Soubhagya"));
console.log(getName.split("-"));
