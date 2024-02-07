let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let phoneNumber = document.getElementById("phoneNumber");
    let personalNum = document.getElementById("personalNum");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

function handleLogin() {

    
    if (fname.value.length >= 2) {
        fname.style.borderColor = "rgb(25, 213, 25";
    } else {
        fname.style.borderColor = "red";
    }

    if (lname.value.length >= 2) {
        lname.style.borderColor = "rgb(25, 213, 25";
    } else {
        lname.style.borderColor = "red";
    }

    if (phoneNumber.value.length === 9) {
        phoneNumber.style.borderColor = "rgb(25, 213, 25";
    } else {
        phoneNumber.style.borderColor = "red";
    }

    if (personalNum.value.length === 11) {
        personalNum.style.borderColor = "rgb(25, 213, 25";
    } else {
        personalNum.style.borderColor = "red";
    }

    if (email.value.length >= 2) {
        email.style.borderColor = "rgb(25, 213, 25";
    } else {
        email.style.borderColor = "red";
    }

    if (password.value.length >= 6) {
        password.style.borderColor = "rgb(25, 213, 25";
    } else {
        password.style.borderColor = "red";
    };
}