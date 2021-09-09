/* Selectors
const profile = document.querySelector(".profile-image");

//Event Listeners
profile.addEventListener("click", () => {
  document.querySelector(".dropdown-content").classList.toggle("show");
});

// Show Password function
const icon = document.querySelector(".password-icon");
var x = document.getElementById("password");
icon.addEventListener("click", () => {
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
});
// Show password function ends */
