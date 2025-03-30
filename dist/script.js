const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
password.style.borderColor = "red";
confirmPassword.style.borderColor = "red";
function validatePassword(userPassword, userConfirmPassword) {
    if (userPassword !== userConfirmPassword) {
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
    }
    else {
        password.style.borderColor = "green";
        confirmPassword.style.borderColor = "green";
    }
}
confirmPassword.addEventListener("input", (event) => {
    const target = event.target;
    validatePassword(password.value, target.value);
});
password.addEventListener("focus", () => {
    password.style.boxShadow = `0 4px 8px 0 ${password.style.borderColor}, 0 6px 20px 0 ${password.style.borderColor}`;
});
confirmPassword.addEventListener("focus", () => {
    confirmPassword.style.boxShadow = `0 4px 8px 0 ${confirmPassword.style.borderColor}, 0 6px 20px 0 ${confirmPassword.style.borderColor}`;
});
password.addEventListener("blur", () => {
    password.style.boxShadow = ""; // Reset box-shadow when focus is lost
});
confirmPassword.addEventListener("blur", () => {
    confirmPassword.style.boxShadow = ""; // Reset box-shadow when focus is lost
});
