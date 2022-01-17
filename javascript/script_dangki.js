/** @format */

var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confirmPassword = document.querySelector("#cf_password");
var form = document.querySelector("form");

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.add("error");
  small.innerText = message;
}

function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("error");
  small.innerText = "";
}

function checkEmptyError(listInput) {
  listInput.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      showError(input, "Khong duoc de trong");
    } else {
      showSuccess(input);
    }
  });
}

function checkEmailError(input) {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  input.value = input.value.trim();

  if (regexEmail.test(input.value)) {
    showSuccess;
  } else {
    showError(input, "Email sai dinh dang");
  }
}

function checkPassword(input) {
  if (password.value == input.value) {
    showSuccess;
  } else {
    input.focus();
    showError(input, "Mat khau khong trung khop");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkEmptyError([username, email, password, confirmPassword]);
  checkEmailError(email);
  checkPassword(confirmPassword);
});
