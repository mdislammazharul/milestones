// filter-- > conditional
// map vs filter --> map works for all element and return all elements, but filter works only for if the condition is true

const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 20, color: 'white' }
]

const priceLow = products.filter(product => product.price < 1000);
console.log(priceLow);

const blackItem = products.filter(product => product.color == 'black');
console.log(blackItem);

// find () --> it does not creat any arry... just return the value / object
const whiteItem = products.find(product => product.color == 'pink');
console.log(whiteItem);