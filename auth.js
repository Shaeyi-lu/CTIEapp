//sign up
const signUpForm = document.querySelector('#signUp-form');
if (signUpForm != null) {
  signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get password and email
    const inputEmail = signUpForm['email'].value;
    const inputPassword = signUpForm['pass'].value;
    const confirmPassword = signUpForm['confirmpass'].value;
    // create user
    if (inputPassword === confirmPassword) {
      auth.createUserWithEmailAndPassword(inputEmail, inputPassword).then(cred => {
        var user = cred.user;
        window.location.href = 'index.html';
        // reset form
        loginForm.reset();
      });
    } else {
      alert('Passwords don\'t match');
    }
  });
}

//login
const loginForm = document.querySelector('#login-form');
if (loginForm != null) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get password and email
    const inputEmail = loginForm['email'].value;
    const inputPassword = loginForm['pass'].value;
    // log in user
    auth.signInWithEmailAndPassword(inputEmail, inputPassword).then((cred => {
      var user = cred.user;
      window.location.href = 'index.html';
      // reset form
      loginForm.reset();
    }));
  });
}
