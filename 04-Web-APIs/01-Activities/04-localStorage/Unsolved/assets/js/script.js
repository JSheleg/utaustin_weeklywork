var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var signUpButton = document.querySelector('#sign-up');
var msgDiv = document.querySelector('#msg');
var userEmailSpan = document.querySelector('#user-email');
var userPasswordSpan = document.querySelector('#user-password');

function renderLastRegistered() {
  var userEmail = localStorage.getItem("email");//only need to give key
  var userPassword = localStorage.getItem("password");
  if (userEmail === null || userPassword === null){
    return;
  }
  else{
    userEmailSpan.textContent = userEmail
    userPasswordSpan.textContent = userPassword
  }
    
  // TODO: Retrieve the last email and password from localStorage
  // TODO: If they are null, return early from this function
  // TODO: Otherwise set the text of the 'userEmailSpan' and 'userPasswordSpan' to the corresponding values from localStorage
}

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

signUpButton.addEventListener('click', function(event) {
  event.preventDefault();

  var userEmail = document.querySelector('#email').value;
  var userPassword = document.querySelector('#password').value;

  if (email === '') {
    displayMessage('error', 'Email cannot be blank');
  } else if (password === '') {
    displayMessage('error', 'Password cannot be blank');
  } else {
    displayMessage('success', 'Registered successfully');
    localStorage.setItem("email", userEmail);//key value pair key = "email"
    localStorage.setItem("password",userPassword);

    // TODO: Save email and password to localStorage
    // TODO: Render the last registered email and password
  }
});
