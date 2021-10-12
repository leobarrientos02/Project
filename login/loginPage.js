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
const submit = document.getElementById("submit");
submit.addEventListener("click", () => {});
