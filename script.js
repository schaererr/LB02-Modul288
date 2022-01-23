const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordcheck = document.getElementById('passwordcheck');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    if (usernameValue === '') {
        setError(username)
    } else {
        setSucces(username)
    }

    const emailValue = email.value.trim();
    if (emailValue === '') {
        setError(email)
    } else if (!emailHas(emailValue)) {
        setError(email)
    } else {
        setSucces(email)
    }

    const passwordValue = password.value.trim();
    if (passwordValue === '') {
        setError(password)
    } else {
        setSucces(password)
    }

    const passwordcheckValue = passwordcheck.value.trim();
    if (passwordcheckValue === '') {
        setError(passwordcheck)
    } else if (passwordcheckValue !== passwordValue) {
        setError(passwordcheck)
    } else {
        setSucces(passwordcheck)
    }
}

function setError(input) {
    const formStatus = input.parentElement;
    formStatus.className = 'form-status error';
}

function setSucces(input) {
    const formStatus = input.parentElement;
    formStatus.className = 'form-status succes';
}

// Email Funktion für gültige Email - Kopiert aus dem Internet
function emailHas(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// Login Formular
// Richtige Login Daten
const user = {
    "name" : "test",
    "password" : "test"
}

const usernameLogin = document.getElementById('username-login');
const passwordLogin = document.getElementById('password-login');


form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputsLogin();
});

function checkInputsLogin() {
    const usernameLoginValue = usernameLogin.value.trim();
    if (usernameLoginValue === '') {
        setErrorLogin(usernameLogin)
    } else if (usernameLoginValue !== user.name) {
        setErrorLogin(usernameLogin)
    } else if (usernameLoginValue === user.name) {
        setSuccesLogin(usernameLogin)
    }

    const passwordLoginValue = passwordLogin.value.trim();
    if (passwordLoginValue === '') {
        setErrorLogin(passwordLogin)
    } else if (passwordLoginValue !== user.password) {
        setErrorLogin(passwordLogin)
    } else if (passwordLoginValue === user.password) {
        setSuccesLogin(passwordLogin)
    }
}

function setErrorLogin(input) {
    const formStatus = input.parentElement;
    formStatus.className = 'form-status-login error';
}

function setSuccesLogin(input) {
    const formStatus = input.parentElement;
    formStatus.className = 'form-status-login succes';
}









