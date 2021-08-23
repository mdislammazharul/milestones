// ES6 : if num2 is not given, then the default value will be 10
function add(num1, num2 = 10) {
    const total = num1 + num2;
    return total;
}

const result = add(15);
console.log(result);