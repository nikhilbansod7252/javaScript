//Type to declear constant
const accountId = 12131415 //You can't change value of const

//Two types to declear var let and var
let accountEmail = "nikhil@gmail.com"
var accountPassword = "7325"
/*
Prefer not to use var
bcs of issue in block scope and functional scope
*/

accountCity = "Pune"
let accountState //You decleared and don't initialize - in o/p undefined

//accountId = 23 //not allowed
accountEmail = "nb@nb.com"
accountPassword = "3221"
accountCity = "Nagpur"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
