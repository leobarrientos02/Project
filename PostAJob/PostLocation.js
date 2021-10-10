const usOnlyCard = document.getElementById("usOnly");
const worldwideCard = document.getElementById("worldwide");

//Buttons for cards
const worldwideBtn = document.getElementById("worlwide-button");
const usOnlyBtn = document.getElementById("usOnly-button");

worldwideCard.addEventListener("click", () => {
  worldwideCard.style.border = "1.25px solid #054e97";
  worldwideBtn.style.color = "#054e97";
  worldwideBtn.style.border = "1.25px solid #054e97";

  usOnlyCard.style.border = "1.25px solid lightgrey";
  usOnlyBtn.style.color = "transparent";
  usOnlyBtn.style.border = "1.25px solid lightgrey";
});
usOnlyCard.addEventListener("click", () => {
  usOnlyCard.style.border = "1.25px solid #054e97";
  usOnlyBtn.style.color = "#054e97";
  usOnlyBtn.style.border = "1.25px solid #054e97";

  worldwideCard.style.border = "1.25px solid lightgrey";
  worldwideBtn.style.color = "transparent";
  worldwideBtn.style.border = "1.25px solid lightgrey";
});
