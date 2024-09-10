const myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let createdDate = new Date(2024, 2, 24);
// let createdDate = new Date(2024, 2, 24, 5, 23);
// let createdDate = new Date("2024-2-24");
let createdDate = new Date("03-24-2006");
// console.log(createdDate.toString());

let myCreatedDate = new Date();
// console.log(myCreatedDate);
// console.log(myCreatedDate.getTime());
// console.log(Math.round(new Date()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

const dayTime = `${newDate.getDay()} and the time is ${newDate.getTime()}`;
// console.log(dayTime);

const dayFormatter = newDate.toLocaleDateString('default', {
    weekday: 'long'
})
console.log(dayFormatter);
