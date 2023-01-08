const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value && password.value) {
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
