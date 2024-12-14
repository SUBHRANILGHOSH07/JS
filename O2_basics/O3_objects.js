// singleton
//Object.create

// object literal

const mysym = Symbol("key1")

const Jsuser = {
    name: "subhranil",
    "full name": "Subhranil Ghosh",
    [mysym] : "mykey1",
    age: 21,
    location: "kolkata",
    email: "subhra@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser["mysym"]);
// console.log(typeof Jsuser.mysym);
// console.log(Jsuser[mysym]);

Jsuser.email = "hitesh@chatgpt.com";
// Object.freeze(Jsuser)
Jsuser.email = "hitesh@microsoft.com";
// console.log(Jsuser);

Jsuser.greeting = function () {
    console.log("Hello Js");
}

Jsuser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());





