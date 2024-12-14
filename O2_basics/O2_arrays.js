const dc_heroes = ["superman", "batman", "flash"];
const marvel_heroes = ["ironman", "captain america", "thor"];

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const heroes = marvel_heroes.concat(dc_heroes)
// console.log(heroes);

const allHeroes = [...marvel_heroes, ...dc_heroes]
// console.log(allHeroes);

const anotherarray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_anotherarray = anotherarray.flat(Infinity)
// console.log(real_anotherarray);

console.log(Array.isArray("hello"));
console.log(Array.from("hello"));
console.log(Array.from({name:"subhranil"}));//interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));



