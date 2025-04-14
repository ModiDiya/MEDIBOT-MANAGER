// Function to switch between Sign-Up and Log-In tabs
function switchTab(tab) {
    const signupTab = document.getElementById("signup-tab");
    const loginTab = document.getElementById("login-tab");
    const formTitle = document.getElementById("form-title");
    const nameField = document.getElementById("name-field");
    const formButton = document.getElementById("form-btn");

    if (tab === "signup") {
        signupTab.classList.add("active");
        loginTab.classList.remove("active");
        formTitle.innerText = "Sign Up";
        nameField.style.display = "block";
        formButton.innerText = "SIGN UP";
    } else {
        loginTab.classList.add("active");
        signupTab.classList.remove("active");
        formTitle.innerText = "Log In";
        nameField.style.display = "none";
        formButton.innerText = "LOG IN";
    }
}

// Function to toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

// Function to handle form submission (Dummy Example)
document.getElementById("form-btn").addEventListener("click", function () {
    const userType = document.querySelector('input[name="user-type"]:checked');
    
    if (userType) {
        alert(`Form submitted as a ${userType.value}!`);
    } else {
        alert("Please select Doctor or Patient.");
    }
});
