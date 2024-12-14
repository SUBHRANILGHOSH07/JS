function sayMyname() {
  console.log("s");
  console.log("u");
  console.log("b");
  console.log("h");
  console.log("r");
  console.log("a");
}

// sayMyname()// execute the function

// function addtwonumbers(a, b) {
//     console.log(a + b);//here a and b are parameters
// }
function addtwonumbers(a, b) {
  // let result = a + b;
  // console.log("answer");
  // return result;//after result nothing gets executed
  return a + b;
}

// addtwonumbers(1, 2);// 3 // here 1 and 2 are arguments
// addtwonumbers(1, "2")//12

// const result = addtwonumbers(1, 2);

// console.log(result);// 3

//first case
// function loggedinusermessage(username) {
// second case
function loggedinusermessage(username = "sam") {
  // if (username === undefined) {
  //     console.log("Please enetr a username");
  //     return;
  // }
  if (!username) {
    return "Please enetr a username";
  }
  return `${username} is logged in`;
}

// console.log(loggedinusermessage("subhranil"));

// console.log(loggedinusermessage());//undefined is logged in for first case and sam is logged in for second case

// function calculatecartprice(...num1) {
//     return num1;
// }
// console.log(calculatecartprice(2, 4, 5));//[2, 4, 5]

function calculatecartprice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculatecartprice(2, 4, 5, 6));//[5, 6] // 2 and 4 are val1 and val2 and 5 and 6 are num1

// const user = {
//     username: "subhranil",
//     price: 999
// }

// function handleobject(anyobject) {
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

const user = {
  username: "subhra",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);

handleObject({
  username: "sam",
  price: 299,
});

const mynewarray = [2, 3, 4, 5, 6];

function returnthirdvalue(mynewarray) {
  return mynewarray[2];
}

// console.log(returnthirdvalue(mynewarray));
//OR
console.log(returnthirdvalue([2, 3, 4, 5, 6]));
