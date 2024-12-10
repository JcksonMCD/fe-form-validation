// This will contain the JS for index.html - be sure to link to the correct file.
const nameRegex = /^[\p{L}\p{M}'-]+(?: [\p{L}\p{M}'-]+)*$/u;
const textRegex = /^[a-zA-Z0-9\s.,!?'"()-]+$/;
const urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const topTextInput = document.getElementById("top-text");
const bottomTextInput = document.getElementById("bottom-text");
const imageUrlInput = document.getElementById("image-url");
const submitButton = document.getElementById("submit-button");
const form = document.querySelector("form");

firstNameInput.addEventListener("input", (e) => checkValidInputWithRegex(nameRegex, e, "first-name-feedback"));
lastNameInput.addEventListener("input", (e) => checkValidInputWithRegex(nameRegex, e, "last-name-feedback"));
topTextInput.addEventListener("blur", (e) => checkValidInputWithRegex(textRegex, e, "top-text-feedback"));
bottomTextInput.addEventListener("blur", (e) => checkValidInputWithRegex(textRegex, e, "bottom-text-feedback"));
imageUrlInput.addEventListener("blur", (e) => checkValidInputWithRegex(urlRegex, e, "image-url-feedback"));

function checkValidInputWithRegex(regex, e, feedbackId){
    const value = e.target.value.trim();
    const feedback = document.getElementById(feedbackId);

    if (regex.test(value)){
        e.target.classList.add("valid");
        e.target.classList.remove("invalid"); 
        e.target.style.borderColor = 'green'; 
        feedback.textContent = "Looks good";
        feedback.style.color = 'green';  
        return true;
    } else {
        e.target.classList.add("valid");
        e.target.classList.remove("invalid"); 
        e.target.style.borderColor = 'red';
        feedback.textContent = "Please use a valid input";
        feedback.style.color = 'red';
        return false;
    } }

form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const isFirstNameValid = checkValidInputWithRegex(nameRegex, 
        { target: firstNameInput }, "first-name-feedback");
    const isLastNameValid = checkValidInputWithRegex(nameRegex, 
        { target: lastNameInput }, "last-name-feedback");
    const isTopTextValid = checkValidInputWithRegex(textRegex, 
        { target: topTextInput }, "top-text-feedback");
    const isBottomTextValid = checkValidInputWithRegex(textRegex, 
        { target: bottomTextInput }, "bottom-text-feedback");
    const isImageUrlValid = checkValidInputWithRegex(urlRegex, 
        { target: imageUrlInput }, "image-url-feedback");

    if (isFirstNameValid && isLastNameValid && isTopTextValid && 
        isBottomTextValid && isImageUrlValid) {
        console.log("Form is valid! Submitting...");
        form.submit();
    } else {
        console.log("Form has invalid inputs. Please correct them.");
    }
});