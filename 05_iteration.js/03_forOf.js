// for of
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello,World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);    
}

// Maps

const map = new Map()
map.set("IN", "INDIA")
map.set("USA", "UNITED STATES OF AMERICA")
map.set("FR", "FRANCE")
map.set("IN", "INDIA") // Map is not itearble.

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ': ', value);    
}


// Map is not iterable with forOf
const myobjcet = {
    'game1': 'GTA',
    'game2': 'Froza',
    'game3': 'Uncharted'
}
for (const [key, value] of myobjcet) {
    // console.log(key, ': ', value);
}