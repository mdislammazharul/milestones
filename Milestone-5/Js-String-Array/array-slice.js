// slice -- original array remains same
const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];
const numberSliced = numbers.slice(4, 8);
console.log(numberSliced);
console.log(numbers);

// splice -- orginal array changed || splice (4,2) -- removes elements start with index[4] and next one. 
const numberSpliced = numbers.splice(4, 2);
console.log(numberSpliced);
console.log(numbers);

// insert/inject numbers in deleted numbers indexs
const numberSpliced2 = numbers.splice(4, 3, 99, 111, 88, 12);
console.log(numberSpliced2);
console.log(numbers);

// insert/inject numbers without deletion -- (4, 0, 99, ...) here, 0 means no index deletion
const numberSpliced2 = numbers.splice(4, 0, 99, 111, 88, 12);
console.log(numberSpliced2);
console.log(numbers);