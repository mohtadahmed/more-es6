const numbers = [20, 57, 39, 84, 59];

const half = numbers.map(x => x / 2);
// console.log(half);

const thirds = numbers.map(n => n / 3);
// console.log(thirds);

// Get Strings value from an Array using Map
const friends = ['Tom Cruise', 'Angilina Joly', 'Chris Evan', 'Black Widow', 'Thor', 'Iron Man'];
const firstLetters = friends.map(friend => friend[0]);
// console.log(firstLetters);

const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);

const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'ipad', price: 38000},
    {id: 4, name: 'tablet', price: 29000},
    {id: 5, name: 'watch', price: 12000},
];

const product = products.map(product => product);
const items = products.map(price => price.price);
const itemName = products.map(name => name.name);
// console.log(product);
// console.log(items)
console.log(itemName)