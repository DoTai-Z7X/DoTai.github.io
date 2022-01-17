/** @format */

var username = document.querySelector("#username");
var password = document.querySelector("#password");
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

function loginSuccess() {
  if (username.value == "Chí Hiếu" && password.value == "123456") {
    alert("Bạn đã đăng nhập thành công với tên " + username.value);
    window.location.href = "canhan_hieu.html";
  } else {
    alert("Đăng nhập không thành công!");
    username.focus();
    return;
  }
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkEmptyError([username, password]);
  loginSuccess();
});
