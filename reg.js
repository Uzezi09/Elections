const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const passWord = document.querySelector('#password');
const secPassWord = document.querySelector('#password2');


const regForm = document.getElementById('reg-form');

regForm.addEventListener('click',  (e)=> {
  // console.log('hello')

  // validate form 
  let isEmailValid = checkEmail();
  isPasswordValid = checkPassword(),
    isConfirmPasswordValid = checkConfirmPassword();
    isNameValid = checkFirstName()

  let isFormValid = isEmailValid &&           
    isPasswordValid && isConfirmPasswordValid && isNameValid;
  
  // submit to server if form is valid
  if (isFormValid) {
    console.log('safe')
  }

  e.preventDefault()
})

function showError(input, message) {
  const inputField = input.parentElement;

  inputField.classList.remove('success');
  inputField.classList.add('error');

  const error = inputField.querySelector('small');
  error.textContent = message;
}

function showSuccess(input){
  const inputField = input.parentElement;

  inputField.classList.add('success');
  inputField.classList.remove('error');

  const error = inputField.querySelector('small');
  error.textContent = '';
}

const isRequired = value => value === '' ? false : true;
// function isRequired(value) {
//   value === '' ? false : true;
// }


// check email 
function isEmailValid(email) {
  // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const re = /([a-zA-Z0-9_\-\.]+)[@]([a-zA-Z]+)[\.]([a-zA-Z]+){2,3}$/;
  return re.test(email);
};

function checkEmail () {
  let valid = false;
  const confirmEmail = email.value.trim();
  if (!isRequired(confirmEmail)) {
      showError(email, 'Email cannot be blank.');
  } else if (!isEmailValid(confirmEmail)) {
      showError(email, 'Email is not valid.')
  } else {
      showSuccess(email);
      valid = true;
  }
  return valid;
}

function isNameSecure(firstName) {
  const re = /([a-zA-Z]+)/
  return re.test(firstName);
}
function checkFirstName() {
  let valid = false;
  const confirmFirstName = firstName.value.trim();

  if (!isRequired(confirmFirstName)) {
    showError(firstName, 'firstname cannot be blank.');
  } else if (!isNameSecure(confirmFirstName))  {
    showError(firstName, 'length too long')
  } else {
    showSuccess(firstName)
    valid = true;
  }

  return valid;

}

// check password 
function isPasswordSecure(password){
  const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  return re.test(password);
};

function checkPassword() {
  let valid = false;

  const password = passWord.value.trim();

  if (!isRequired(password)) {
      showError(passWord, 'Password cannot be blank.');
  } else if (!isPasswordSecure(password)) {
      showError(passWord, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
  } else {
      showSuccess(passWord);
      valid = true;
  }

  return valid;
};

// COMFIRM PASSWORD 
function checkConfirmPassword() {
  let valid = false;
  // check confirm password
  const confirmPassword = secPassWord.value.trim();
  const password = passWord.value.trim();

  if (!isRequired(confirmPassword)) {
      showError(secPassWord, 'Please enter the password again');
  } else if (password !== confirmPassword) {
      showError(secPassWord, 'Confirm password does not match');
  } else {
      showSuccess(secPassWord);
      valid = true;
  }

  return valid;
};

// regForm.addEventListener('input', function (e) {
//   switch (e.target.id) {
    
//       case 'email':
//           checkEmail();
//           break;
//       case 'password':
//           checkPassword();
//           break;
//       case 'password2':
//           checkConfirmPassword();
//           break;
//   }
// });