// console.log('Login page added');

// step 1: set event handler
document.getElementById('button-login').addEventListener('click', function(event){

    // step 2: prevent default behavior (prevent reloading browser)
    event.preventDefault();
    // console.log('login button clicked');

    // step 3: get the phone number and pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    // step 4: validate phone and pin (This code is temporary, you should not do like this)
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are logged in');
        window.location.href = '/home.html';
        // step 5: 
    }
    else{
        alert('Wrong phone number or pin')
    }
    
})