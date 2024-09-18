// console.log('Home page added');

// step 1: add an event handler to add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('Money add button clicked');

    // step 2: get money and pin number
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // step 3: verify pin number(wrong way to validate pin number)
    if(pinNumberInput === '1234'){
        console.log('Adding money to your account');

        // step 4: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // step 5: add money to the account balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // step 6: update the balance
        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Failed to add money! Wrong password, Please try again.');
    }
})