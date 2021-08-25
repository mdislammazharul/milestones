// 1
const name = 'Md Mazharul Islam';
let profession = 'Lecturer';

// 2
const person = `I am ${name}
I am a ${profession}`;
console.log(person);

// 3.1
const division = (num) => num / 5;
const output1 = division(15);
console.log(output1);

//3.2
const mulAdd = (num1, num2) => {
    num1 = num1 + 2;
    num2 = num2 + 2;
    const mul = num1 * num2;
    return mul;
};
const output2 = mulAdd(5, 7);
console.log(output2);

// 3.3
