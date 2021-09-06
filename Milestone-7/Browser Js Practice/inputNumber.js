const inputNumber = () => {
    const number = prompt('Enter a Number');
    if (number) {
        numberInt = parseInt(number);
        numberInt += 200;
        alert(numberInt);
    }
}