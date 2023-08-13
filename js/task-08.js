"use strict";

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const userData = {};

  formData.forEach((value, name) => {
    userData[name] = value;
  });

  if (!userData.email || !userData.password) {
    alert("Please fill in all fields.");
    return;
  }

  console.log(userData);
  loginForm.reset();
});
