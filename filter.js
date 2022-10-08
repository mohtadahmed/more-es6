const numbers = [20, 1, 27, 18, 19, 10, 2, 61, 98, 87, 57, 32];

const bigNumber = numbers.filter(number => number > 20);
// console.log(bigNumber);

const tinyNumber = numbers.filter(number => number < 10);
// console.log(tinyNumber);

const evenNumber = numbers.filter(number => number % 2 == 0);
// console.log(evenNumber);


const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'ipad', price: 38000},
    {id: 4, name: 'tablet', price: 29000},
    {id: 5, name: 'watch', price: 12000},
];

const expensive = products.filter(product => product.price > 30000);
console.log(expensive);