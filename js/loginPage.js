//Show Password functionality
const checkbox = document.getElementById("showPassword");
const show = document.getElementById("show");

checkbox.addEventListener("click", showPassword);

function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
    show.innerText = "Hide Password";
  } else {
    x.type = "password";
    show.innerText = "Show Password";
  }
}
