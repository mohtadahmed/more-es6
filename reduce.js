const numbers = [10, 20, 30, 40];

// Using reduce with single line arrow function
const total = numbers.reduce((previous, current) => previous + current, 0);

// Using reduce with multiline arrow function
const newTotal = numbers.reduce((previous, current) => {
    return previous + current;
}, 0)
// console.log(total);


const names = ['Karim', 'Abul', 'Rony', 'Bunny', 'Honey'];

const nameTotal = names.reduce((previous, current) => previous + current, 'Hi');
console.log(nameTotal);