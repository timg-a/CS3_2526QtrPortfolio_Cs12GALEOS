document.getElementById("clubForm").onsubmit = function submit() {
    let confirmation = confirm("Are you sure you want to submit the form?");

    if (confirmation) {
        alert("Form submitted successfully!");
    } else {
        return false;
    }       
};

document.getElementById("clubForm").onreset = function reset() {
    let reset = confirm("Are you sure you want to reset the form? This action cannot be undone.");

    if (reset) {
        alert("Form reset!");
    } else {
        return false;
    }
};