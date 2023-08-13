const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formInputEl = event.currentTarget.elements;
  const mail = formInputEl.email.value;
  const password = formInputEl.password.value;
  if (!(mail && password)) {
    alert("All fields must be filled!");
  } else {
    const logInData = {
      mail,
      password,
    };
    console.log(logInData);
    formEl.reset();
  }
}
