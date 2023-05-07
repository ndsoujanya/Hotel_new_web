const form = document.querySelector('#book-room');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const addressInput = document.querySelector('#address');
const cityInput = document.querySelector('#city');
const zipInput = document.querySelector('#zip');
const dateinInput = document.querySelector('#dateofstay');
const dateofoutInput = document.querySelector('#dateofout');


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

    //USERNAME
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'Name can not be empty');
    }else if(hasNumbers(usernameInput.value)){
        setError(usernameInput, 'Name should not contain numbers/digits');}
    else if(usernameInput.value.trim().length <3 || usernameInput.value.trim().length > 15){
        setError(usernameInput, 'Name must be min 3 and max 15 charecters');
    }else {
        setSuccess(usernameInput);
    }
   
    //EMAIL
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Email address can not be empty');
    }else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
    }else{
        setError(emailInput, 'Provide valid email address');
    }

    //PASSWORD
    if(passwordInput.value.trim()==''){
        setError(passwordInput, 'Password can not be empty');
    }else if(passwordInput.value.trim().length <6 || passwordInput.value.trim().length >20){
        setError(passwordInput, 'Password min 6 max 20 characters');
    }else {
        setSuccess(passwordInput);
    }

    //Address
    if(addressInput.value.trim()==''){
        setError(addressInput, 'Address can not be empty');
    }else if(addressInput.value.trim().length > 100 ){
        setError(addressInput, 'Address cannot be more than 100 characters');
    }else {
        setSuccess(addressInput);
    }

     //City
     if(cityInput.value.trim()==''){
        setError(cityInput, 'City can not be empty');
    }else {
        setSuccess(cityInput);
    }

    //Zip Code
    if(zipInput.value.trim()==''){
        setError(zipInput, 'Zip code can not be empty');}
    else {
        setSuccess(zipInput);
    }

    //Date in
    if(dateinInput.value.trim()==''){
        setError(dateinInput , 'Date of stay can not be empty');}
    else if (isDateLessThanTodayin(dateinInput.value)) {
        setError(dateinInput , 'Date of stay should be greater than today');
          }
    else {
        setSuccess(dateinInput);
    }


    //Date out
     if(dateofoutInput.value.trim()==''){
        setError(dateofoutInput , 'Date of check-out can not be empty');}
    else if (isDateLessThanTodayout(dateofoutInput.value)) {
            setError(dateofoutInput , 'Date of check-out should be greater than today');
        }
        else if (dateofoutInput.value < dateinInput.value) {
            setError(dateofoutInput , 'Date of check-out should be greater than or equal to date of stay');
        }
    else {
        setSuccess(dateofoutInput);
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

function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}

function hasNumbers(name) {
    const regex = /\d/;
    return regex.test(name);
  }
  

function isDateLessThanTodayin(dateString) {
    // Convert date string to Date object
    const enteredDate = new Date(dateString);
    
    // Get current date
    const currentDate = new Date();
    
    // Compare dates
    if (enteredDate < currentDate) {
      return true;
    } else {
      return false;
    }
  }

  function isDateLessThanTodayout(dateString1) {
    // Convert date string to Date object
    const enteredDate = new Date(dateString1);
    
    // Get current date
    const currentDate = new Date();
    
    // Compare dates
    if (enteredDate < currentDate) {
      return true;
    } else {
      return false;
    }
  }
  



