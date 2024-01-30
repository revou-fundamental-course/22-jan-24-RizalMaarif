const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");

    if (name.value === "" || email.value === "" || phone.value === "" || message.value === "") {
        alert("Please fill out all fields.");
        return;
    }

    if (!validateEmail(email.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!validatePhone(phone.value)) {
        alert("Please enter a valid phone number.");
        return;
    }

    alert("Thank you for your inquiry. We will get back");
});