document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("myForm");
    var firstNameInput = document.getElementById("firstName");
    var lastNameInput = document.getElementById("lastName");
    var facilitatorInput = document.getElementById("facilitator");
    var errorContainer = document.getElementById("errorContainer");

    form.addEventListener("submit", function(event) {

    errorContainer.innerHTML = "";

    if (!isValidName(firstNameInput.value)) {
        displayError("Please enter a valid first name (minimum length: 2, alphabetic characters only).");
        event.preventDefault();
        return;
    }

    if (!isValidName(lastNameInput.value)) {
        displayError("Please enter a valid last name (minimum length: 2, alphabetic characters only).");
        event.preventDefault();
        return;
    }

    if (!isValidFacilitator(facilitatorInput.value)) {
        displayError("Please enter a valid facilitator (Jen, Behdad, Chris, Christian, or Josh).");
        event.preventDefault();
        return;
        }
    });

    function isValidName(name) {
        return /^[A-Za-z]{2,}$/.test(name);
    }

    function isValidFacilitator(facilitator) {
        var validFacilitators = ["Jen", "Behdad", "Chris", "Christian", "Josh"];
        return validFacilitators.includes(facilitator);
    }

    function displayError(message) {
        var error = document.createElement("p");
        error.textContent = message;
        errorContainer.appendChild(error);
    }
});