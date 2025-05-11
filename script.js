//Button click
document.getElementById("alertButton").addEventListener("click", () => {
    alert("Button clicked!");
});

//Keypress detection
document.getElementById("textInput",).addEventListener("keypress", (e) => {
    console.log("Key pressed:", e.key);
});

//Change text
document.getElementById("changeTextButton").addEventListener("click", () => {
    document.getElementById("textToChange").innerText = "Text has been changed!";
});

//Tabs
document.querySelectorAll(".tab").forEach(button => {
    button.addEventListener("click", () => {
        const tab = button.getAttribute("data-tab");
        document.getElementById("tabContent").innerText = `You are viewing ${tab} content`;
    });
});

//Form validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    const email = this.email.value;
    const password = this.password.value;
    const feedback = document.getElementById("formFeedback");

    if (!email.includes("@") || password.length < 6) {
        feedback.textContent = "Invalid input. Please check your email and password.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Form submitted successfully!";
        feedback.style.color = "green";
    }
});