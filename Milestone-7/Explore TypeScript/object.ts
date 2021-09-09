const city: string = 'Dhaka';
const fruits: string[] = ['mango', 'banana', 'apple'];

// type declaration of an object
type Person = {
    name: string,
    age: number,
    salary: number,
}
const student: Person = {
    name: 'kamal Ataturk',
    age: 25,
    salary: 54000
}

// another way to declare type
const employee: { name: string, age: number, salary: number } = {
    name: 'Solaiman',
    age: 29,
    salary: 10000
}