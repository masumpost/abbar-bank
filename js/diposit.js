document.getElementById('deposit-btn').addEventListener('click', function(){
  let inputField = document.getElementById('deposit-input');
let inputFieldValue = inputField.value;
let finalInput = parseFloat(inputFieldValue);

let totalDepositElement = document.getElementById('total-deposit');
let totalDepositValue = totalDepositElement.innerText;
let totalDeposit = parseFloat(totalDepositValue);
totalDepositElement.innerText = finalInput + totalDeposit;

let totalAmountElement = document.getElementById('total-amount');
let totalAmountValue = totalAmountElement.innerText;
let totalAmount = parseFloat(totalAmountValue);
totalAmountElement.innerText = finalInput + totalAmount;
})