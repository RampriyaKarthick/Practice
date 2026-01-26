// document.addEventListener("DOMContentLoaded", function() {

// }

document.getElementById("form-validate").addEventListener("submit", function(event){
    console.log(event)
    event.preventDefault();

      document.getElementById("username-error").innerHTML = "";
        document.getElementById("email-error").innerHTML = "";
        document.getElementById("password-error").innerHTML = "";
        document.getElementById("confirm-password-error").innerHTML = "";


let userName = document.getElementById("username").value.trim();
let password = document.getElementById("password").value.trim();
let confirmPassword = document.getElementById("confirm-password").value.trim();
let email = document.getElementById("email").value.trim();
if(userName===""){
    document.getElementById("username-error").innerHTML="Name is required"
}
if(email===""){
    document.getElementById("email-error").innerHTML="Email is required"
}
if(password===""){
    document.getElementById("password-error").innerHTML="Password is required"
}
if(confirmPassword===""){
    document.getElementById("confirm-password-error").innerHTML="Confirm Password is required"
}

})