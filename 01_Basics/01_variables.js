const accountId = 144553
let accountEmail = "soubhagya@gmail.com"
var accountPassword = "12345"
accountCity = "Jagatsignhapur"

// accountId = 2 // --> not allowed change value in const
accountEmail = "sn@yahoo.com"
accountPassword = "1256789"
accountCity = "Paradeep"
let accountState;

console.log(accountId);
// instead of using multiple times of console.log() use console.table() 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/