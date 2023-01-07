const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();
  if (loginFormEl.elements.email.value && loginFormEl.elements.password.value) {
    const authorizationFormData = {};

    new FormData(e.currentTarget).forEach((value, name) => {
      authorizationFormData[name] = value;
    });

    console.log(authorizationFormData);
    loginFormEl.reset();
    return;
  }

  alert("Please, enter your password and e-mail!");
}
