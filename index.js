// This will contain the JS for index.html - be sure to link to the correct file.
const nameRegex = /^[\p{L}\p{M}'-]+(?: [\p{L}\p{M}'-]+)*$/u;
const textRegex = /^[a-zA-Z0-9\s.,!?'"()-]+$/;

const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const topTextInput = document.getElementById("top-text");
const bottomTextInput = document.getElementById("bottom-text");

firstNameInput.addEventListener("input", (e) => checkValidInputWithRegex(nameRegex, e, "first-name-feedback"));
lastNameInput.addEventListener("input", (e) => checkValidInputWithRegex(nameRegex, e, "last-name-feedback"));
topTextInput.addEventListener("input", (e) => checkValidInputWithRegex(textRegex, e, "top-text-feedback"));
bottomTextInput.addEventListener("input", (e) => checkValidInputWithRegex(textRegex, e, "bottom-text-feedback"));

function checkValidInputWithRegex(regex, e, feedbackId){
    const value = e.target.value;
    const feedback = document.getElementById(feedbackId);

    if (regex.exec(value)){
        e.target.classList.add("valid");
        e.target.classList.remove("invalid"); 
        e.target.style.borderColor = 'green'; 
        feedback.textContent = "Looks good";  
    } else {
        e.target.classList.add("valid");
        e.target.classList.remove("invalid"); 
        e.target.style.borderColor = 'red';
        feedback.textContent = "Please use a valid input";
    } }
