const numbers = [20, 1, 27, 18, 19, 10, 2, 61, 98, 87, 57, 32];

const divideByTwo = numbers.find(num => num % 2 == 0);
const twoDivide = numbers.filter(num => num % 2 == 0);
console.log(twoDivide);
console.log(divideByTwo);


const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'ipad', price: 38000},
    {id: 4, name: 'tablet', price: 29000},
    {id: 5, name: 'watch', price: 12000},
];

const cheapPrice = products.find(price => price.price < 40000);
console.log(cheapPrice);