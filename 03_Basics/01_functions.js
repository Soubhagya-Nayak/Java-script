function sayMyName() {
    console.log("S");
    console.log("o");
    console.log("u");
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("g");
    console.log("y");
    console.log("a");
}
// sayMyName()



function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)
}
// addTwoNumbers(23, 12)
// const result = addTwoNumbers(3, 5);
// console.log(result); //-> It throws Undefined for this type of log printing declare.

function sumOfTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = sumOfTwoNumbers(3, 6)
// console.log("Result: ", result);



function loginUserMessage(username) {
    return `${username} just logged in`
}
// console.log(loginUserMessage("Soubhagya"));


function loginUserMessage(username) {
    // if (username === undefined) {
    //     console.log("Please enter a UserName");
    //     return
    // }
    // return `${username} just logged in`
    if (!username) {
        console.log("Please enter a UserName");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());



function calculateCartPrice(val1, val2,...num) { // adding numbers in arrays using ...(rest)
    return num
}
// console.log(calculateCartPrice(200, 400, 500, 2000));


// Access Object in function
const user = {
    productname: "Sensodyne",
    price: 230
}
function handleObject(anyObject) {
    console.log(`Product Name is ${anyObject.productname} and price is ${anyObject.price}`);    
}
// 2Types of Access
handleObject(user)
handleObject({
    productname: "Aula F75 KeyBord",
    price: 6000
})


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 600, 500, 1000]));
