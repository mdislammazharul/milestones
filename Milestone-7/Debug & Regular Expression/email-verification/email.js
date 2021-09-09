// getting email text
const verifyBtn = () => {
    const emailText = document.getElementById('email-text');
    const validEmail = validateEmail(emailText.value);
    if (validEmail) {
        displaywarning('block', 'none');
    }
    else {
        displaywarning('none', 'block');
    }
}

// email verification
const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// display valid or not
const displaywarning = (flag1, flag2) => {
    document.getElementById('valid').style.display = flag1;
    document.getElementById('notValid').style.display = flag2;
}