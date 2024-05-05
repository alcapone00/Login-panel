var username = document.forms['form']['username'];
var password = document.forms['form']['password'];
var usernameRecovery = document.forms['form']['usernameRecovery'];

var email_error = document.getElementById('wrongEmail');
var pass_error = document.getElementById('wrongPassword');
var recovery = document.getElementById('recovery');

username.addEventListener('textInput', emailVerify);
password.addEventListener('textInput', passVerify);
usernameRecovery.addEventListener('textInput', recoveryRemove);

function validated(){
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(username.value)){
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
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(username.value)){
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


function recoveryValidated(){
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(usernameRecovery.value)){
        usernameRecovery.focus();
        usernameRecovery.style.border = "1px solid red";
        email_error.style.display = "block";
        return false
    }
}

function recoveryRemove(){
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(usernameRecovery.value)){
        usernameRecovery.focus();
        usernameRecovery.style.display = "none";
        recoveryMessage.style.display = "block";
        return true
    }

}