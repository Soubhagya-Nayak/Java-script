const user = {
    username: "Soubhagya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
user.username = "Raj"
// user.welcomeMessage()

// console.log(this);


// Function Declaration by different Methods.
// 1.
// function chai() {
//     let username = "Soubhagya"
//     console.log(this.username);
// }
// chai()

// 2.
// const chai = function() {
//     let username = "Soubhagya"
//     console.log(this);
// }
// chai()

// 3.
const chai = () => {
    let username = "Soubhagya"
    console.log(this);
}
// chai()

// Different Types of Arrow Functions

// 1.
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// 2.
// const addTwo = (num1, num2) => num1 + num2
// 3.
// const addTwo = (num1, num2) => (num1 + num2)
// 4.
const addTwo = (num1, num2) => ({username: "Soubhagya"})

console.log(addTwo(12, 23));
