// console.log('Home page added');

// step 1: add an event handler to add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    console.log('Money add button clicked');

    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);
})