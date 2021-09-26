document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    userEmail = emailField.value;

    const passField = document.getElementById('user-password');
    userPass = passField.value;

    if (userEmail = 'sontan@bapp.com' && userPass == 'secret') {
        window.location.href = 'banking.html';
    }

})

