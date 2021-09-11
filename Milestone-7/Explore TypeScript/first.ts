const myNumber = 5;
const myName = 'Mazhar';
console.log('Hello from typeScript', myName);

// how to declare ts variables
let money: number = 500;
let honey: string = 'I have no money';
let funny: boolean = false;

// ts function
function add(first: number, second: number): number {
    const result = first + second;
    return result;
}

const output: number = add(45, 87)

// multipurpose: we can use two type string & number
// >>>>>>>
// function addMore(first: number | string, second: number | string): number | string {
//     const result: string | number = first + second; // it has a potential error
//     return result;
// }

// const outputMore: number = add(45, 87);
// const fullName = addMore('Adam', 'Smith');