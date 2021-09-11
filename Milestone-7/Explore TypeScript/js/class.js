"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._milage = 10000; // have to initialize the value
    }
    getActualMilage() {
        const realMilage = this._milage + 50000;
        return realMilage;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
// have to add 'new' to make a object from class
const toyota = new Car('toyota', 1000000);
const totalPrice = toyota.getTotalPrice(25);
