let exampleInputEmail = document.getElementById("exampleInputEmail");
let exampleInputPassword = document.getElementById("exampleInputPassword");
let repeatPassword = document.getElementById("repeatPassword");
let loginButton = document.getElementById("loginButton");
let passwordRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

loginButton.addEventListener("click", () => {
    if (exampleInputEmail.value.trim() === "") {
        alert("Enter your Email");
    } else if (exampleInputPassword.value.trim() === "") {
        alert("Enter a valid Password");
    } else if (!passwordRegex.test(exampleInputPassword.value.trim())) {
        alert("Enter a strong Password");
    } else if (repeatPassword.value.trim() !== exampleInputPassword.value.trim()) {
        alert("Your Passwords are not the same");
    } else {
        alert("Successfully logged in");
    }
});