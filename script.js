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
  small.innerText = message;
}

//SHOWS INPUT SUCCESS
const showSuccess = input => {
  const formControl = input.parentElement;
  formControl.classList.add('success');
}

//EMAIL VALIDATOR USING REGEX
const isValidEmail = email => emailRegEx.test(String(email).toLowerCase());


//EVENT LISTENERS
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!userName.value) {
    showError(userName, 'Username is required');
  } else {
    showSuccess(userName);
  }

  if (!email.value) {
    showError(email, 'Email is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }
});