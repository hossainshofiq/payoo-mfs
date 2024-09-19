// console.log('Features file added');

// show the cash out form
document.getElementById('btn-show-cash-out').addEventListener('click', function(){
    // console.log('Cash out button clicked');

    // remove the hidden class in cash out form
    document.getElementById('cash-out-form').classList.remove('hidden');
    
    // add the hidden class in add money form
    document.getElementById('add-money-form').classList.add('hidden');
})

// show the add money form and hide the cash out form
document.getElementById('btn-show-add-money').addEventListener('click', function(){
    // console.log('Add money button clicked');

    document.getElementById('add-money-form').classList.remove('hidden');

    document.getElementById('cash-out-form').classList.add('hidden');
})