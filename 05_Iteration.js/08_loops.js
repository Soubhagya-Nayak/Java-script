const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, curr) {
    // console.log(`acc: ${acc} and curr: ${curr}`);
    return acc + curr
}, 0)
// console.log(myTotal);


const totalVal = myNums.reduce((acc, curr) => acc + curr, 0)
// console.log(totalVal);


const shoppingCart =[
    {
        courseName: "JavaScript",
        price: 1999
    },
    {
        courseName: "Python",
        price: 2999
    },
    {
        courseName: "App Development",
        price: 5999
    },
    {
        courseName: "Data Science",
        price: 11999
    }
]

const priceToPay = shoppingCart.reduce((item1, item2) => item1 + item2.price, 0)
console.log(priceToPay);
