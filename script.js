const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//SHOWS INPUT ERROR
const showError = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.classList.add('error');
  formControl.classList.remove('success');
  small.innerText = message;
}

//SHOWS INPUT SUCCESS
const showSuccess = input => {
  const formControl = input.parentElement;
  formControl.classList.add('success');
  formControl.classList.remove('error');
}

//EMAIL VALIDATOR USING REGEX
const isValidEmail = email => emailRegEx.test(String(email).toLowerCase());

//CHECKS REQUIRED FIELD
const checkRequired = inputArr => {
  inputArr.forEach(input => {
    if (!input.value.trim()) {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//CHECKS LENGTH OF INPUT
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`)
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`)
  } else {
    showSuccess(input);
  }
};

//RETURN CAPITALISED FIELD NAME
const getFieldName = (input) => {
  return input.id[0].toUpperCase() + input.id.slice(1);
}

//EVENT LISTENERS
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(userName, 3, 15);
  checkLength(password, 6, 25);
});