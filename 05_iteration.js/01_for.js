// for
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop: ${j} and outer loop: ${i}`);  
        // console.log(i + "*" + j + ' = ' + i*j);             
    }
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}


// break, Continue
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        // console.log(`5 detected`);
        break
    }
    // console.log(`Value is ${i}`);
}


for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`5 detected`);
        continue
    }
    console.log(`Value is ${i}`);
}