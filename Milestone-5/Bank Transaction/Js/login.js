document.getElementById('login-submit').addEventListener('click', function () {
    // get email
    const emailFeild = document.getElementById('user-email');
    const userEmail = emailFeild.value;
    // get password
    const passwordFeild = document.getElementById('user-password');
    const userPassword = passwordFeild.value;
    // check email & password
    if (userEmail == 'sontan@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'
    }
})

// 