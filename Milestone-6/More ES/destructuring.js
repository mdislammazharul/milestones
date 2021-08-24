const fish = {
    name: 'King Hilsh',
    id: 58,
    price: 9000,
    phone: '01717555555',
    address: 'Chandpur',
    dress: 'Silver'
};
// declearing a variable same name as object element name
// const phone = fish.phone;
// const price = fish.price;
// console.log(phone, price);

// simplifing the above code is like that, left side --> the property 'name', 'id'..., = equalts to --> right side --> the main object name 'fish'
const { phone, price, dress, id } = fish;
console.log(dress);

const company = {
    name: 'GP',
    ceo: {
        id: 1,
        name: 'ajmol',
        food: 'fuchka'
    },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react'
    }
};
// right side --> first- main object, dot. second object
const { work, framework } = company.web;
const { food } = company.ceo;
const { name } = company;

console.log(work, framework, food, name);