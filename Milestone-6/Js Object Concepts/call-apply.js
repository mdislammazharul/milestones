const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDey: function (expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
        console.log('here5555', this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}
const normalGolam = {
    id: 102,
    money: 8000,
    name: 'Normal Golam'
}

// using call, we can directly get the treatDey function / method from the kibria object
// call --> c (starting of call) --> Comma
kibria.treatDey.call(heroBalam, 500, 100, 50);
kibria.treatDey.call(heroBalam, 300, 50, 30);

// apply --> same as call, but when we give the parameter, we have to send it as a Array
// apply --> a (starting of apply) --> Array
kibria.treatDey.apply(heroBalam, [500, 100, 50]);
kibria.treatDey.apply(heroBalam, [1000, 200, 100]);

kibria.treatDey.apply(normalGolam, [700, 100, 70])

const obj = { a: 1, b: 7, c: 3, length: 2 };
console.log(Object.keys(obj).length);

const obj1 = { module: 35, video: 2 };
const obj2 = { module: 35, video: 2 };
console.log(obj1 === obj2);

const getGirlFriend = (name = "chokina") => "name"; console.log(getGirlFriend());