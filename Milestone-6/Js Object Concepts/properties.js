// key value pair --> key = color, value = yellow
const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};

// getting all keys from a object
const keys = Object.keys(bottle);
console.log(keys);

// getting all values
const values = Object.values(bottle);
console.log(values);

// const entries / key-value pair
const pairs = Object.entries(bottle);
console.log(pairs);

// delete key from object
delete bottle.isCleaned;
console.log(bottle);

// seal --> if sealed, then not possible to delete || after seal, changing value of a key is possible 
Object.seal(bottle);
delete bottle.price;
bottle.price = 100;
console.log(bottle);

// freeze --> if freezed, then value of a key is not possible to change
Object.freeze(bottle);
bottle.price = 20;
console.log(bottle);
