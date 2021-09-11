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

//-----------------

// array like object-map
const students = [
    { name: 'jalil', roll: 2, batch: 7 },
    { name: 'khalil', roll: 6, batch: 8 },
    { name: 'rahim', roll: 8, batch: 9 },
    { name: 'karim', roll: 1, batch: 10 },
    { name: 'halim', roll: 3, batch: 6 },
]

// linear variable
const id = students.forEach(student => {
    console.log(student.roll);
})

// array output
const id2 = students.map(student => student.roll)
console.log(id2);

// convert linear output to array
const arr = [];
const id3 = students.forEach(student => {
    arr.push(student.roll);
})
console.log(arr);

// Object.values
const values = students.map(student => {
    const keys = Object.values(student);
    console.log(keys);
});

