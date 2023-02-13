document.getElementById('deposit-btn').addEventListener('click', function(){
    let depositInputValue = document.getElementById('deposit-input');
    let depositInputString = depositInputValue.value;
    let depositInput = parseFloat(depositInputString);
    let totalDepositAmountString = document.getElementById('total-deposit');
    let totalDepositAmount = parseFloat(totalDepositAmountString);
    totalDepositAmount = depositInput;
    // let finalDepositAmount = totalDepositAmount + depositInput;
    // totalDepositAmount = 'finalDepositAmount';

    console.log(finalDepositAmount);
})