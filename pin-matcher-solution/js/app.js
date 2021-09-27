function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        console.log('got 3 digit. call again', pin);
        getPin();
    }

}
function generatePin() {

    document.getElementById('display-pin').value = getPin();
}

document.getElementById('keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {

        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typed = document.getElementById('typed-numbers').value;

    const pass = document.getElementById('notify-pass');
    const fail = document.getElementById('notify-fail');

    if (pin == typed) {

        pass.style.display = 'block';
        fail.style.display = 'none';
    }
    else {

        fail.style.display = 'block';
        pass.style.display = 'none';
    }
}