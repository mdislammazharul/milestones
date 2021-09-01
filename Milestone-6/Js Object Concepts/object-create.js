// using object literal
const student = { name: 'Sakib Al Hasan', job: 'cricketer' };

// constructor
const person = new Object();
console.log(person);

// inherited from student object
const human = Object.create(student);
console.log(human.job);

// class
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manus', 12);
console.log(peop);

// function --> Syntactical Sugar
function Manus(name) {
    this.name = name;
}

const man = new Manus('kader');
console.log(man);