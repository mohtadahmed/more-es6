const numbers = [20, 57, 39, 84, 59];

const half = numbers.map(x => x / 2);
// console.log(half);

const thirds = numbers.map(n => n / 3);
// console.log(thirds);

// Get Strings value from an Array using Map
const friends = ['Tom Cruise', 'Angilina Joly', 'Chris Evan', 'Black Widow', 'Thor', 'Iron Man'];
const firstLetters = friends.map(friend => friend[0]);
console.log(firstLetters);

const nameLengths = friends.map(friend => friend.length);
console.log(nameLengths);