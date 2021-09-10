//Show Password functionality
const checkbox = document.getElementById("showPassword");

checkbox.addEventListener("click", showPassword);

function showPassword() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
