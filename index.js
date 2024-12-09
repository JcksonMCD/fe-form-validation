// This will contain the JS for index.html - be sure to link to the correct file.
const nameRegex = /^[\p{L}\p{M}'-]+(?: [\p{L}\p{M}'-]+)*$/u;
const textRegex = /^[a-zA-Z0-9\s.,!?'"()-]+$/;

const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const topTextInput = document.getElementById("top-text");
const bottomTextInput = document.getElementById("bottom-text");

firstNameInput.addEventListener("input", (e) => checkValidInputWithRegex(nameRegex, e));
lastNameInput.addEventListener("input", (e) => checkValidInputWithRegex(nameRegex, e));
topTextInput.addEventListener("input", (e) => checkValidInputWithRegex(textRegex, e));
bottomTextInput.addEventListener("input", (e) => checkValidInputWithRegex(textRegex, e));

function checkValidInputWithRegex(regex, e){
    const value = e.target.value;

    if (regex.exec(value)){
        e.target.classList.add("valid");
        e.target.classList.remove("invalid"); 
        e.target.style.borderColor = 'green';    
    } else {
        e.target.classList.add("valid");
        e.target.classList.remove("invalid"); 
        e.target.style.borderColor = 'red';
    } }
