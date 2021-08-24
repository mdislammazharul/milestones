const numbers = [4, 6, 8, 10];
// old fashioned process
// const output = [];
// for (const number of numbers) {
//     const result = number * 2;
//     output.push(result);
// }
// console.log(output);

// map process
const multiplication = numbers.map(x => x * 5);
console.log(multiplication);