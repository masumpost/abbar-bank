document.getElementById('withdraw-btn').addEventListener('click', function(){
    let withdrawInputElement = document.getElementById('withdraw-input');
    let withdrawInputValue = withdrawInputElement.value;
    let withdrawAmount = parseFloat(withdrawInputValue);

    let findTotalWithdraw = document.getElementById('how-withdraw');
    let totalWithdrawElement = findTotalWithdraw.innerText;
    let totalWithdraw = parseFloat(totalWithdrawElement);
    findTotalWithdraw.innerText = withdrawAmount + totalWithdraw;

    let findTotalAmountElement = document.getElementById('total-amount');
    let findTotalAmountValue = findTotalAmountElement.innerText;
    let findTotalAmount = parseFloat(findTotalAmountValue);
    findTotalAmountElement.innerText = findTotalAmount - withdrawAmount;
})