const name = "subhranil";
const repocount = 5

// console.log(name + repocount + " Value"); // outdated

console.log(`Hello My name is ${name} and my repo count is ${repocount}`);

const gameName = new String('subhranil-sg')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-11, 4);
console.log(anotherString);

const newStringOne = "   subhranil   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.google.com/search?q=js";
console.log(url.replace("?", "-"));

console.log(url.includes("sub"));

console.log(gameName.split('-'));







