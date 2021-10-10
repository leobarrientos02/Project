// Post Scope Start
const EditFreelanceExperience = document.getElementById(
  "freelance-experience-edit"
);

const CurrentExperienceCard = document.querySelector(".freelance-experience");

const ExperienceCard = document.querySelector(".freelance-experience-options");

EditFreelanceExperience.addEventListener("click", () => {
  ExperienceCard.style.display = "inline-block";
  CurrentExperienceCard.style.display = "none";
});
const entryOption = document.querySelector(".entry-option");

const intermediateOption = document.querySelector(".intermediate-option");

const expertOption = document.querySelector(".expert-option");

const entryBtn = document.getElementById("entry-button");
const intermediateBtn = document.getElementById("intermediate-button");
const expertBtn = document.getElementById("expert-button");

const CurrentExperienceChoice = document.getElementById(
  "currentExperienceChoice"
);

// Holds the user choice
var experience = "";

entryOption.addEventListener("click", () => {
  entryBtn.style.color = "#054e97";
  intermediateBtn.style.color = "transparent";
  expertBtn.style.color = "transparent";

  experience = "Entry Level";

  CurrentExperienceChoice.innerText = experience;

  ExperienceCard.style.display = "none";
  CurrentExperienceCard.style.display = "flex";
});
intermediateOption.addEventListener("click", () => {
  entryBtn.style.color = "transparent";
  intermediateBtn.style.color = "#054e97";
  expertBtn.style.color = "transparent";

  experience = "Intermediate Level";

  CurrentExperienceChoice.innerText = experience;

  ExperienceCard.style.display = "none";
  CurrentExperienceCard.style.display = "flex";
});
expertOption.addEventListener("click", () => {
  entryBtn.style.color = "transparent";
  intermediateBtn.style.color = "transparent";
  expertBtn.style.color = "#054e97";

  experience = "Expert Level";

  CurrentExperienceChoice.innerText = experience;

  ExperienceCard.style.display = "none";
  CurrentExperienceCard.style.display = "flex";
});

// Scope Experience JS Ends

//Scope Time Start
const EditProjectTime = document.getElementById("project-time-edit");

EditProjectTime.addEventListener("click", () => {
  console.log("leo");
});

//Scope Time Ends
