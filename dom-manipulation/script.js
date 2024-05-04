var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('wrongEmail');
var pass_error = document.getElementById('wrongPassword');

username.addEventListener('textInput', emailVerify);
password.addEventListener('textInput', passVerify);

function validated(){
    if(username.value.length < 8){
        username.focus();
        username.style.border = "1px solid red";
        email_error.style.display = "block";
        return false
    }
    if(password.value.length < 6){
        password.focus();
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        return false
    }
}

function emailVerify(){
    if(username.value.length <= 8){
        username.style.border = "1px solid"
        email_error.style.display = "none"
        return true
    }
}

function passVerify(){
    if(password.value.length <= 6){
        password.style.border = "1px solid"
        pass_error.style.display = "none"
        return true
    }
}