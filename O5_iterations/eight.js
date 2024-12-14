const mynums = [1, 2, 3];

// const mytotal = mynums.reduce((acc, currval) => {
//     console.log(`acc is ${acc} and currval is ${currval}`);
//     return acc+currval
// }, 0)

// const mytotal = mynums.reduce((acc, currval) => acc + currval, 0);

console.log(mytotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const total = shoppingCart.reduce((value, item) => value + item.price, 0);

console.log(total);
