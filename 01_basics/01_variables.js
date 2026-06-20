const accountId=1343434
let accountEmail="ranasamad074@gmail.com"
var accountPassword="12345"
accountCity="Lodhran"


// accountId=2  // not allowed because accountId is a constant
accountEmail="abdulcode138@gmail.com"
accountPassword="67890"
accountCity="Karachi"

console.log(accountId);

/*
Prefer not to use var  because of issue in block scope and functional scope.
*/
console.table([accountId,accountEmail,accountPassword,accountCity])