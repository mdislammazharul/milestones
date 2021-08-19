// arguments
function addNumbers() {
    let sum = 0;
    for (const arg of arguments) {
        sum = sum + arg;
    }
    return sum;
}
const sum = addNumbers(23, 13, 53, 213, 12, 283, 123, 45, 45);
console.log(sum);