// arrow function
const add = (num1, num2) => num1 + num2;
const sum = add(22, 12);
console.log(sum);

// multiline arrow
const doMath = (x, y) => {
    const sum = x + y;
    const diff = sum + x - y;
    const mul = diff - x * y;
    const div = mul * x / y;

    return div;
}

const math = doMath(10, 5);
console.log(math);