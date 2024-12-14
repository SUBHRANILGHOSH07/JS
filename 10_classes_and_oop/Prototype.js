// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myheroes = ["thor", "spiderman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",
    
    getSpidypower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function () {
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyhitesh = function () {
    console.log(`hitesh says hello`);
}

// heropower.hitesh()
// myheroes.hitesh()
// myheroes.heyhitesh()
// heropower.heyhitesh()

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
    makeassignment: 'JS Assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"hitesh".trueLength()
"icetea".trueLength()