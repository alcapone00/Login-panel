var username = document.forms['form']['username'];
var accountUsername = document.forms['form']['accountUsername'];
var password = document.forms['form']['password'];
var secondPassword = document.forms['form']['secondPassword'];
var usernameRecovery = document.forms['form']['usernameRecovery'];

var username_error = document.getElementById('wrongUsername');
var email_error = document.getElementById('wrongEmail');
var pass_error = document.getElementById('wrongPassword');
var secondPass_error = document.getElementById('wrongSecondPassword');
var recovery = document.getElementById('recovery');
var buttonRecovery = document.getElementById('restoreButton');

accountUsername.addEventListener('textInput', usernameVerify);
username.addEventListener('textInput', emailVerify);
password.addEventListener('textInput', passVerify);
usernameRecovery.addEventListener('textInput', recoveryRemove);

// email recovery

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


// Account recovery

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

    if(emailRegex.test(usernameRecovery.value)){
        usernameRecovery.style.display = "none";
        buttonRecovery.style.display = "none";
        email_error.style.display = "none";
        recovery.style.display = "block";
        recovery.style.marginTop = "20px";
        recovery.style.marginBottom = "60px";
        return true
    }
}

// create account 

function usernameValidated(){
    if(accountUsername.value.length < 6){
        accountUsername.focus();
        accountUsername.style.border = "1px solid red";
        username_error.style.display = "block";
        return false
    }
    if(!completeValidated()){
        return false
    }
}

function completeValidated(){
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
    if(secondPassword.value != password.value){
        secondPassword.focus();
        secondPassword.style.border = "1px solid red";
        secondPass_error.style.display = "block";
        return false
    }
    return true
}


function usernameVerify(){
    if(accountUsername.value.length <= 6){
        accountUsername.style.border = "1px solid"
        username_error.style.display = "none"
        return true
    }
}



