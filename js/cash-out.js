// console.log('cashout')

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    console.log('Cash out button clicked');

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cash-out-pin').value;
    console.log(cashOut, pinNumber);

    // verify pin number(wrong way to validate pin number)
    if(pinNumber === '1234'){
        // console.log('Money is reducing');
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        // reduce the balance
        const newBalance = balanceNumber - cashOutNumber;
        // update the ui
        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        console.log('Failed to cash out! Wrong input, please try again.')
    }
})