const numbers = [1, 2, 3, 4];
const output = [];

// Assigning an Arrow Function
const doubled2 = num => num * 3;

// Double the value of an Array using For of and Functions.
for (const number of numbers) {
    // const doubled = doubled2(number);
    const doubled = doubleIt(number);
    output.push(doubled);
}

function doubleIt(number){
    return number * 2;
}
// Double the value using Map in an Array.
const result = numbers.map(doubleIt);

// Five time the array value using Map in an Array.
const fiveTimes = [2, 4, 6, 8].map(x => x * 5);

// Showing the output in Console.
console.log(fiveTimes);
console.log(result);
console.log(output);