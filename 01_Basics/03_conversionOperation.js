let score = "33abc";
// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

let type = true;
// console.log(typeof type);

let value = Number(type);
// console.log(value);
// console.log(typeof value);

/*
    "33" => 33
    "33abc" => NaN (Not a Number)
    true => 1; false => false;
*/

let number = "33abc";
let convertInBoolean = Boolean(number);
// console.log(convertInBoolean);
// console.log(typeof convertInBoolean);

/*
    1 => true; 0 => false;
    "Soubhagya" => true;
    "33abc" => true;
*/

let someNumber = 33;
let convertInString = String(someNumber);
// console.log(typeof convertInString);
// console.log(convertInString);


// **********************Operations*********************** //

let anotherValue = 3;
let negValue = -anotherValue;
// console.log(negValue);

let str1 = "Hello";
let str2 = " Soubhagya";

let str3 = str1 + str2;
// console.log(str3);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 % 2);
// console.log(2 ** 2);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log(1 + "2" + 1);
// console.log("1" + 2 + 1);
// console.log(1 + 2 + "1");

let numberIncrement = 100;
numberIncrement++;
++numberIncrement;
// console.log(numberIncrement);

// console.log(+true); --> It print's 1.
// console.log(+""); -- It print's 0.

let num1, num2, num3;
num1 = num2 = num3 = 2.3; // Bad form of Code.