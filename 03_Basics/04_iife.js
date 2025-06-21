// Immediately Invoked Function Expression (IIFE)

function chai() {
    console.log(`DB Connected`);
}

// For avoiding global scope polution
(function chai() { // It is calles as named IIFE
    console.log(`DB Connected`);
})(), //-> this comma is compulsory

((name) => { // It is called as Unamed IIFE
    console.log(`2ND DB Connected to ${name}`);
})('Soubhagya')