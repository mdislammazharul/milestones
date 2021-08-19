const products = [
    'Dell hardcore i29 200GB laptop',
    'iphpone 1TB camera flashlight Phone',
    'yellow laptop with black camera',
    '1X59 lenevo commertial yoga laptop',
    'Lg supernova laptop',
    'HTC low price Phone',
    'purple color phone with laptop'

];

const searching = 'Yellow'

// indexOf
const output = [];
for (const product of products) {
    if (product.indexOf(searching) != -1) {
        // output.push(product);
    }
}
console.log(output);

// includes -- check entire line
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}
console.log(output);

// startswith -- check only first word
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);