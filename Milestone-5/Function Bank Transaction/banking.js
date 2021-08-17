function getInputValue(inputId) {
    const inputInput = document.getElementById(inputId);
    const inputAmountText = inputInput.value;
    const newInputAmount = parseFloat(inputAmountText);
    // clear the input field
    inputInput.value = '';

    return newInputAmount;
}

function updateTotalField(totalFieldID, newFieldAmount) {
    const totalField = document.getElementById(totalFieldID);
    const previousFieldText = totalField.innerText;
    const previousFieldAmount = parseFloat(previousFieldText);
    const newFieldTotal = previousFieldAmount + newFieldAmount;
    totalField.innerText = newFieldTotal;

}

function updateBalanceField(button, newInputAmount) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (button == 'deposit-button') {
        const newBalanceTotal = previousBalanceTotal + newInputAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
    else if (button == 'withdraw-button') {
        const newBalanceTotal = previousBalanceTotal - newInputAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
}

// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {

    // input deposit amount
    const newDepositAmount = getInputValue('deposit-input');

    // update deposit total
    updateTotalField('deposit-total', newDepositAmount);

    // update account balance
    updateBalanceField('deposit-button', newDepositAmount);
})

// handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function () {

    // input withdraw amount
    const newWithdrawAmount = getInputValue('withdraw-input');

    // update withdraw total
    updateTotalField('withdraw-total', newWithdrawAmount);

    //update account balance ammount
    updateBalanceField('withdraw-button', newWithdrawAmount);
})