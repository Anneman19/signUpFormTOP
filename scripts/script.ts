const password = document.querySelector("#password") as HTMLInputElement;
const confirmPassword = document.querySelector("#confirm-password") as HTMLInputElement;

password.style.borderColor = "red";
confirmPassword.style.borderColor = "red";

function validatePassword(userPassword: string, userConfirmPassword: string) {
    if (userPassword !== userConfirmPassword) {
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
    } else {
        password.style.borderColor = "green";
        confirmPassword.style.borderColor = "green";
    }
}

confirmPassword.addEventListener("input", (event) => {
    const target = event.target as HTMLInputElement;
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