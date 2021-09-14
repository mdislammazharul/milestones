let initialValue = 0
let sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.x
}, initialValue)

console.log(sum) // logs 6