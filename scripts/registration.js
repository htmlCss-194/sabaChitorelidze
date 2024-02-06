let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let phoneNumber = document.getElementById("phoneNumber");
    let personalNum = document.getElementById("personalNum");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

function handleLogin() {

    
    if (fname.value.length >= 2) {
        fname.style.borderColor = "green";
        console.log(fname.value.length)
    } else {
        fname.style.borderColor = "red";
    }
}