// closure means, if we create a function inside a function, then the inside function's parameter can be accessed only by the upper function, not from the outside of the function.

// we can also create an Object as a return type.

const bank = owner => {
    balance = 0;
    return {
        deposit: amount => {
            balance += amount;
            return balance;
        },
        withdraw: amount => {
            balance -= amount;
            return balance;
        }
    }
}

const mofijBank = bank('Mofij');
console.log(mofijBank.deposit(100));
console.log(mofijBank.deposit(400));
console.log(mofijBank.deposit(50));
// balance is a variable of bank function inside the deposit function. so it cannot be accessed from outside.
console.log(mofijBank.balance);
console.log(mofijBank.withdraw(50));
console.log(mofijBank.withdraw(150));
console.log(mofijBank.withdraw(30));