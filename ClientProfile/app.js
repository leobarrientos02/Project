const sessionCard = document.querySelector(".sessionCard");
const profileImage = document.getElementById("profileImage");

profileImage.addEventListener("click", () => {
  sessionCard.classList.add("isVisible");
});

sessionCard.addEventListener("click", () => {
  sessionCard.classList.remove("isVisible");
});
