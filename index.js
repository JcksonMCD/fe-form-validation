// This will contain the JS for index.html - be sure to link to the correct file.
const nameRegex = /^[\p{L}\p{M}'-]+(?: [\p{L}\p{M}'-]+)*$/u;
const textRegex = /^[a-zA-Z0-9\s.,!?'"()-]+$/;
const urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const topTextInput = document.getElementById("top-text");
const bottomTextInput = document.getElementById("bottom-text");
const imageUrlInput = document.getElementById("image-url");

firstNameInput.addEventListener("input", (e) => checkValidInputWithRegex(nameRegex, e, "first-name-feedback"));
lastNameInput.addEventListener("input", (e) => checkValidInputWithRegex(nameRegex, e, "last-name-feedback"));
topTextInput.addEventListener("input", (e) => checkValidInputWithRegex(textRegex, e, "top-text-feedback"));
bottomTextInput.addEventListener("input", (e) => checkValidInputWithRegex(textRegex, e, "bottom-text-feedback"));
imageUrlInput.addEventListener("input", (e) => checkValidInputWithRegex(urlRegex, e, "image-url-feedback"));

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
