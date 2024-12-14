const accountId = 14453;
let accountEmail = "subhranil@gmail.com";
var accountPassword = "12345";
accountCity = "Kolkata";
let accountState;

// accountId = 2;// not allowed

accountEmail = "sg@gmail.com";
accountPassword = "1234";
accountCity = "Bengaluru";

console.log(accountId);

// Prefer not to use var because of issue in block scope and functional scope

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
