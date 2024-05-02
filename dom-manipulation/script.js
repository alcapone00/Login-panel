var username = document.forms['form']['username']
var password = document.forms['form']['password']

var email_error = document.getElementsById('wrongEmail')
var pass_error = document.getElementsById('wrongPassword')

function validated(){
    if(username.value.length < 8){
        username.style.border = "1px solid red";
        email_error.style.display = "block";
        username.focus();
        return false
    }
}

function validated(){
    if(password.value.length < 8){
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false
    }
}