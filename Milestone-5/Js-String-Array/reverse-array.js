const numbers = [25634, 62534, 243, 12, 1, 236, 72, 97, 34];

const sortedNumbers = (numbers.sort(function (a, b) {
    return a - b;
})).reverse();
console.log(sortedNumbers);