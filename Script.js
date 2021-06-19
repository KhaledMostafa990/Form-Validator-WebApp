const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('passwordConfirm');

//show input error message
function showError(input, message){
    const formControl =input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function showSuccess(input) {
    const formControl =input.parentElement;
    formControl.className = 'form-control success';
}

//checkRequierd
function checkRequierd(inputArr){
    inputArr.forEach(function(input){
      if(input.value.trim() === ''){
        showError(input, `${getFaildName(input)} is requierd`);
      }else {
          showSuccess(input);
      }
    });
}

//check email validation
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    }else{
        showError(input, 'Email is not valid');
    }
}

//checkLength 
function checkLength(input, min, max){

    if(input.value.length < min ){
        showError(input,
             ` ${getFaildName(input)} is short than ${min} characters`);
    }else if (input.value.length > max){
        showError(input,
             ` ${getFaildName(input)} is long than ${max} characters`);
    }else {
        showSuccess(input);
    }

}
//checkPassword Match
function checkPassword(input1, input2) {
    if (input1.value !== input2.value){
        showError(input2, 'Password do not match');
    }
}
//getFaildName
function getFaildName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listener
form.addEventListener('submit', function(e) {
    e.preventDefault();


checkRequierd([username, email, password, passwordConfirm]);
checkLength(username, 3, 15);
checkLength(password, 3, 20);
checkLength(passwordConfirm, 3, 20);
checkEmail(email);
checkPassword(password, passwordConfirm);
});



















    // if (username.value === ''){
    //     showError(username, "Username is required");
    // }
    // else { 
    //     showSuccess(username);
    // }

    // if (email.value === ''){
    //     showError(email, "Email is required");
    // }
    // else if (!validateEmail(email.value)) {
    //     showError(email, "Input ont email")
    // }
    // else { 
    //     showSuccess(email);
    // }
    // if (password.value === ''){
    //     showError(password, "Password is required");
    // }
    // else { 
    //     showSuccess(password);
    // }
    // if (password2.value === ''){
    //     showError(password2, "Password confirm required");
    // }
    // else { 
    //     showSuccess(password2);
    // }
