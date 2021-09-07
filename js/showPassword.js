const icon = document.querySelector(".password-icon");
var x = document.getElementById("password");
icon.addEventListener("click", () => {
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
});
