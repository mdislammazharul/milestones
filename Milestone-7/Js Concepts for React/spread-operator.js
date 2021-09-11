const numbers = [3, 7, 4, 5, 9, 1, 2, 8];

const newNumbers = [...numbers];
numbers.push(12);
numbers.push(18);
console.log(newNumbers);