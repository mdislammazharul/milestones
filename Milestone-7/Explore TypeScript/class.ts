class Car {
    model: string;
    price: number;
    private _milage: number; // have to use underscore for declaring private variable
    constructor(model: string, price: number) {
        this.model = model;
        this.price = price;
        this._milage = 10000; // have to initialize the value
    }
    getActualMilage(): number {
        const realMilage = this._milage + 50000;
        return realMilage;
    }
    getTotalPrice(tax: number): number {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}

// have to add 'new' to make a object from class
const toyota = new Car('toyota', 1000000);
const totalPrice: number = toyota.getTotalPrice(25);