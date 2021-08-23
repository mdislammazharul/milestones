const numbers = [23, 65, 99, 21, 34];
console.log(...numbers);

const maxInArray = Math.max(...numbers);
console.log(maxInArray);

const number2 = [...numbers, 25];
numbers.push(22);
console.log(number2);
console.log(numbers);

const division = (num1, num2) => console.log(num1 / num2);
division(4, 2);