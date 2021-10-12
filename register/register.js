//Show Password functionality
const showPswrd = document.getElementById("show");

showPswrd.addEventListener("click", showPassword);

function showPassword() {
  var x = document.getElementById("Password");
  if (x.value === "") {
  } else if (x.type === "password") {
    x.type = "text";
    show.innerText = "Hide Password";
  } else {
    x.type = "password";

    show.innerText = "Show Password";
  }
}

const error = document.getElementById("error");
function matchPassword() {
  var x = document.getElementById("Password");
  var y = document.getElementById("Password2");

  if (!(x.value === y.value)) {
    error.innerText = "Password does not match.";
  } else if (x.value === y.value) {
    error.innerText = "";
  }
}

const matchPsw = document.getElementById("Password2");
matchPsw.addEventListener("focusout", matchPassword);
