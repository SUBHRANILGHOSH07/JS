// const user = new Object();
const user = {};

user.id = "123abc";
user.name = "subhranil";
user.isLoggedIn = false;

// console.log(user);

const regularuser = {
  email: "subhra@g.com",
  fullname: {
    firstname: "subhranil",
    lastname: "ghosh",
  },
};

// console.log(regularuser.fullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = Object.assign({},obj1, obj2, obj4)//goood practice

// const obj3 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj3);

const users = [
  {
    id: 1,
    name: "subhranil",
  },
  {
    id: 2,
    name: "subho",
  },
];

// console.log(users[1].name);

// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty("name"));

const course = {
  name: "js in hindi",
  price: "999",
  instructor: "hitesh",
};

// course.instructor

const { instructor: ins } = course; //make shorter name
// console.log(instructor);// it is good practice since we donot have to print every time
console.log(ins);

/* React code
const navbar = ({company}) => {

}

navbar(company = "tcs")
*/
//Json document
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// array consist of json objects
[{}, {}, {}];
