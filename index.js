// This will contain the JS for index.html - be sure to link to the correct file.
const nameRegex = /^[\p{L}\p{M}'-]+(?: [\p{L}\p{M}'-]+)*$/u;
const firstNameInput = document.getElementById("first-name");

firstNameInput.addEventListener("input", (e) => {
    const value = e.target.value;

    console.log("conditional reached")
    if (nameRegex.exec(value)){
        console.log("matches");
        
        e.target.classList.add("valid");
        e.target.classList.remove("invalid"); 
        firstNameInput.style.borderColor = 'green';    
    } else {
        console.log("doesnt")
        e.target.classList.add("valid");
        e.target.classList.remove("invalid"); 
        firstNameInput.style.borderColor = 'red';
    }
})
