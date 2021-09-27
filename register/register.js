//Show Password functionality
const showPswrd = document.getElementById("show");

showPswrd.addEventListener("click", showPassword);

function showPassword() {
  var x = document.getElementById("password");
  if (x.value === "") {
  } else if (x.type === "password") {
    x.type = "text";
    show.innerText = "Hide Password";
  } else {
    x.type = "password";
    show.innerText = "Show Password";
  }
}

const continueBTN = document.getElementById("submit");
continueBTN.addEventListener("mouseover", confirmPassword);

function confirmPassword() {
  var x = document.getElementById("password");
  var y = document.getElementById("confirmPassword");

  if (x.value != y.value) {
    console.log("Wrong");
  } else {
    console.log("True");
  }
}
