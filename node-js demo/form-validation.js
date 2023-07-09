const formValidation = () => {
    const form = document.forms["form"]["nume"];
    const inputValue = numeInput.value;
    
    if(inputValue === "" || inputValue == null){
        alert("You must fill the name input")
    }
}