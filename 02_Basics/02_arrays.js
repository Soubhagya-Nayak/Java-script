const marvel_heros = ["Thor", "IronMan", "SpiderMan"]
const dc_heros = ["SuperMan", "Flash", "BatMan"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const usableArray = anotherArray.flat(Infinity)
// console.log(usableArray);

// console.log(Array.isArray("Soubhagya")); // -> Asking is it a Array
// console.log(Array.from("Soubhagya")); // -> Command to make it Array
// console.log(Array.from({name: "Soubhagya"})); // -> We have to declare that which one to make key or value (Understanding it later)

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
