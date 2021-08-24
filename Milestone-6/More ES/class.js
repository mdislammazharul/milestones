class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log('Start a support session.');
    }
}

const aamir = new Support('Amir Khan', 'BD');
const solaiman = new Support('Solaiman Khan', 'Dubai');
console.log(aamir);
console.log(solaiman);