const emailInput = document.querySelector("#email");
const button = document.querySelector(".submit");
const btn = document.querySelector('.dismiss');
const error = document.querySelector(".error-msg");
const signIn = document.querySelector('main');
const success = document.querySelector('.success-state');



function checkEmail(emailVal) {
    if (emailVal && validateEmail(emailVal)) {
        error.style.display = "none";
        emailInput.style.border = "1px solid green";
        emailInput.style.backgroundColor = "white";
        return true;
    } else {
        error.style.display = "inline-block";
        error.innerText = "Valid email required";
        error.style.color = "red";
        error.stlye.fontWeight = "bold";
        emailInput.style.border = "1px solid red";
        emailInput.style.backgroundColor = "#ffe8e6";
        emailInput.style.color = "red";
        return false;
    }
}


function removeStyleError() {
    error.style.display = "";
    error.innerText = "";
    error.style.color = "black";
    error.style.fontWeight = "";
    emailInput.style.border = "";
    emailInput.style.backgroundColor ="";
}

function validateEmail(email) {
    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

emailInput.addEventListener('input', () => {
    if (emailInput.value) {
        checkEmail(emailInput.value);
    } else {
        removeStyleError();    //it will remove the error effects when the input is null
    }
})



button.addEventListener('click', e => {
    //if email is valid close the subscribe panel and display the success panel
    if (checkEmail(emailInput.value) == true) {
        signIn.style.display = "none";
        success.style.display = "block";

        success.querySelector('p').innerText = `A confirmation email has been sent to 
        ${(emailInput.value)} . Please open it and click the button inside to confirm your subscription.` ;
        
        e.preventDefault();
    }
})


//dismiss btn will go back to subscribe panel
btn.addEventListener('click', e =>{
    signIn.style.display = "grid";
    success.style.display = "none";
    e.preventDefault();
})