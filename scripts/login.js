function handleLogin() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let result = document.getElementById("result");

    // console.log(username,password,result);
    if (username.Value.length >= 3) {
        if (password.value.length >= 8) {
            result.innerHTML = "correct format you may proccesed"
            result.style.color = "green"
        } else {
            result.innerHTML = "Password must be at least 8 chars long!"
            result.style.color = "red"
            password.style.borderColor = "red"
        }
    } else {
        result.innerHTML = "Username must be at least 3 chars long!"
        result.style.color = "red"
        username.style.borderColor = "red"
    };
}