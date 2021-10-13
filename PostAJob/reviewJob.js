const currentTitle = localStorage.getItem("Job_Title");

const reviewJobTitle = (document.getElementById("currentTitleSpan").innerText =
  currentTitle);

const confirmTitle = document.getElementById("confirmTitle");
confirmTitle.addEventListener("click", () => {
  var ctSpan = document.getElementById("currentTitleSpan");
  //console.log(ctSpan.innerText);
  localStorage.setItem("Job_Title", ctSpan.innerText);
});

const jobDescription = document.getElementById("jobDescription");

const currentCategory = localStorage.getItem("category");
const selectedCategory = (document.getElementById(
  "selectedCategory"
).innerText = currentCategory);

const currentScopeSize = localStorage.getItem("projectSize");
const currentScopeTime = localStorage.getItem("TimeScope");
const currentScopeExperience = localStorage.getItem("Experience");

const selectedScope = (document.getElementById("selectedScope").innerText =
  currentScopeSize
    .concat(", ")
    .concat(currentScopeTime)
    .concat(", ")
    .concat(currentScopeExperience));

const currentBudget = localStorage.getItem("budget");
const selectedBudget = document.getElementById("selectedBudget");
selectedBudget.innerText = currentBudget;

const currentLocation = localStorage.getItem("locations");
const selectedLocation = document.getElementById("selectedLocation");
selectedLocation.innerText = currentLocation;

const currentSkills = localStorage.getItem("skills");
const selectedSkills = document.getElementById("selectedSkills");
selectedSkills.innerText = currentSkills;
