// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    c = 30
    // console.log("INNER :", a);//block scope
}


// console.log(a);//global scope
// console.log(b);
// console.log(c);

function one() {
    const username = "subhranil"

    function two() {
        const website = "subhranil.com"
        console.log(username);
    }
    // console.log(website);//error

    two()
}
// one()

if (true) {
    const username = "subhranil"
    if (true) {
        const website = " youtube "
        // console.log(username + website);
    }
    // console.log(website);//error
}
// console.log(username);//error

//             INTERESTING

function addone(num) {
    return num + 1;
}

addone(5);


// another method

const addTwo = function (num) {
  return num + 2;
};
addTwo(5);


