// get Number Values
function getNumber(clickedNum) {

    if (clickedNum != '+') {
        const num = document.getElementById(clickedNum);
        const getNum = num.innerText;
        const output = document.getElementById('output');
        output.innerText = output.innerText + getNum;
        const number = parseFloat(output.innerText)
        console.log(number);
    }
    else if (clickedNum == '+') {
        const num2 = document.getElementById(clickedNum);
        const getNum2 = num2.innerText;
        const output2 = document.getElementById('output');
        output2.innerText = output2.innerText + getNum2;
        const number2 = parseFloat(output2.innerText)
        console.log(number2);
    }
}


// Send Values

document.getElementById('1').addEventListener('click', function () {
    num = getNumber('1')
})
document.getElementById('2').addEventListener('click', function () {
    num = getNumber('2')
})
document.getElementById('3').addEventListener('click', function () {
    num = getNumber('3')
})
document.getElementById('4').addEventListener('click', function () {
    num = getNumber('4')
})
document.getElementById('plus').addEventListener('click', function () {
    num = getNumber('plus')
})
