const useremail = ""

// if (useremail) {
//   console.log("Got user email");
// } else {
//   console.log("Don't have user email");
// }

// falsy values

// false,0,-0,0n,"",null,undefined,NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (useremail.length === 0) {
//     console.log("Array is empty");    
// }

const emptyobj = {}

// if (Object.keys(emptyobj).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15


// console.log(val1);

//Terinary Operator

// condition ? true : false

const iceteaprice = 100
iceteaprice >=80 ? console.log("price more than 80"):console.log("price less than 80");
;

