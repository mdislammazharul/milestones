const numbers = {
    a: 5,
    b: 8,
    c: 10,
    d: {
        d_a: 12,
        d_b: 14,
        d_c: {
            d_a_a: 5,
            d_a_b: 0
        },
    },
    e: 9
};

// const { c, d } = numbers;
// console.log(c, d);
// const { d_a, d_c } = numbers.d;
// console.log(d_a, d_c);

// if we input a property which in not in the object chain, then it will give 'undefined' error
// const { d_a, d_b } = numbers.e;
// console.log(d_a);

// for handling this error, we can use '?' after a property
const { d_a_a } = numbers.c?.d_a;
console.log(d_a_a);

