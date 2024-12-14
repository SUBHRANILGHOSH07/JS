const user = {
  username: "subhra",
  price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
  }
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this);//here it is an empty object but in browser it is window object

// function chai() {
//     let username = "subhra"
//     console.log(this.username);//undefined
    
// }

// chai()

const chai = () => {
    let username = "subhra"
    console.log(this.username);
    
}

// chai()

//arrow function
// () => {}

// const addtwonumbers = (n1, n2) => {
//     return n1 + n2;
// }

//another method

// const addtwonumbers = (n1,n2) => n1 + n2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addtwonumbers = (num1, num2) => ({ username: "hitesh" });

console.log(addtwonumbers(1, 2));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

