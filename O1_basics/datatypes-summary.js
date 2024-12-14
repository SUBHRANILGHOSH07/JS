// Primitive

// 7 types : undefined, null, boolean, number, string, symbol, bigint

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherid = Symbol("123");

console.log(id === anotherid);

// const bigNumber = 3456543576654356754n // bigint

// Reference(Non primitive)  : object, array, function

const heroes = ["superman", "batman", "flash"];
let myobj = {
  name: "subhranil",
  age: "21",
};

const myfunc = function () {
  console.log("Hello");
};

console.log(typeof myfunc);

// JS is a dynamically typed language

//Stack(Primitive),Heap(Non-Primitive)

let myname = "subhranil";

let anothername = myname;
anothername = "subho";

console.log(myname);
console.log(anothername);

let user1 = {
  email: "user@google.com",
};

let user2 = user1;

user2.email = "subhra@gmail.com";

console.log(user1.email);
console.log(user2.email);
