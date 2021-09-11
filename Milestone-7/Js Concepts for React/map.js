const numbers = [3, 7, 4, 5, 9, 1, 2, 8];

// length
console.log(numbers.length);

// forEach
const mulFourNumbers = numbers.forEach(number => {
    console.log(number * 4);
})

// map
const mulTwoNumbers = numbers.map(number => number * 2);
console.log(mulTwoNumbers);

// filter
const evenNumber = numbers.filter(number => number !== 9);
console.log(evenNumber);

// find
const oddNumber = numbers.find(number => number === 7);
console.log(oddNumber);

