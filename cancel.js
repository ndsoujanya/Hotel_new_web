const form = document.querySelector('#cancel-form');
const NameInput = document.querySelector('#name');
const ResNoInput = document.querySelector('#res-no');

form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function validateForm() {
   
    //Name
    if(NameInput.value.trim()==''){
        setError(emailInput, 'Name can not be empty');
    }else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
    }else{
        setError(emailInput, 'Provide valid Name');
    }

    //Reservation Number
    if(ResNoInput.value.trim()==''){
        setError(ResNoInput, 'Reservation Number can not be empty');
    }else if(ResNoInput.value.trim().length <6 || ResNoInput.value.trim().length >20){
        setError(ResNoInput, 'Reservation Number cannot be less than 6 or more than 20');
    }else {
        setSuccess(ResNoInput);
    }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

