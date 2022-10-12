function validate() {
    email = document.getElementById('email');
    password = document.getElementById('password');

    if (email.value === 'test@gmail.com' && password.value === 'password') {
        return true;
    } else {
        alert("Wrong credentials");
        return false;
    }

}

function preback() { window.history.forward(); }
setTimeout("preback()", 0);
window.onunload = function () { null };