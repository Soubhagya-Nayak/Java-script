Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI);
// console.log();
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log("Chai nahi bani");        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperties(chai, 'name', {
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);    
    }    
}