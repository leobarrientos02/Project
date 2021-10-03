const sessionCard = document.querySelector(".sessionCard");
const profileImage = document.getElementById("profileImage");

profileImage.addEventListener("click", () => {
  sessionCard.classList.add("isVisible");
});

sessionCard.addEventListener("click", () => {
  sessionCard.classList.remove("isVisible");
});

const mobileSearchCard = document.querySelector(".mobileSearchCard");
const searchIcon = document.getElementById("mobileSearch");
searchIcon.addEventListener("click", () => {
  mobileSearchCard.style.display = "inline-block";
  searchIcon.style.display = "none";
  navIcon.style.opacity = "0";
  exitSearch.style.display = "inline-block";
});
const exitSearch = document.querySelector(".fa-times");
exitSearch.addEventListener("click", () => {
  mobileSearchCard.style.display = "none";
  searchIcon.style.display = "inline-block";
  navIcon.style.opacity = "1";
  exitSearch.style.display = "none";
});
