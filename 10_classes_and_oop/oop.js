const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    // console.log(this);
  },
};

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.isLoggedIn = isLoggedIn;
  this.loginCount = loginCount;
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userone = new User("subhranil", 10, true);
const usertwo = new User("ChaiAurCode", 11, false);
console.log(userone);
   