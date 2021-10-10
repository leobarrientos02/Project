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

const CurrentTimeCard = document.querySelector(".project-time");

const TimeCard = document.querySelector(".project-time-options");

EditProjectTime.addEventListener("click", () => {
  TimeCard.style.display = "inline-block";
  CurrentTimeCard.style.display = "none";
});

const threeToSixMonthsOption = document.querySelector(".threeToSixMonths");

const oneToThreeMonthsOption = document.querySelector(".oneToThreeMonths");

const lessThanOneMonthOption = document.querySelector(".lessThanOneMonth");

const threeToSixMonthsBtn = document.getElementById("threeToSixMonths-button");
const oneToThreeMonthsBtn = document.getElementById("oneToThreeMonths-button");
const lessThanOneMonthBtn = document.getElementById("lessThanOneMonth-button");

// Holds the user time choice
var timeChoice = "";
const CurrentTimeChoice = document.getElementById("currentTimeChoice");

threeToSixMonthsOption.addEventListener("click", () => {
  threeToSixMonthsBtn.style.color = "#054e97";
  oneToThreeMonthsBtn.style.color = "transparent";
  lessThanOneMonthBtn.style.color = "transparent";

  timeChoice = "3 to 6 months";

  CurrentTimeChoice.innerText = timeChoice;

  TimeCard.style.display = "none";
  CurrentTimeCard.style.display = "flex";
});

oneToThreeMonthsOption.addEventListener("click", () => {
  threeToSixMonthsBtn.style.color = "transparent";
  oneToThreeMonthsBtn.style.color = "#054e97";
  lessThanOneMonthBtn.style.color = "transparent";

  timeChoice = "1 to 3 months";

  CurrentTimeChoice.innerText = timeChoice;

  TimeCard.style.display = "none";
  CurrentTimeCard.style.display = "flex";
});

lessThanOneMonthOption.addEventListener("click", () => {
  threeToSixMonthsBtn.style.color = "transparent";
  oneToThreeMonthsBtn.style.color = "transparent";
  lessThanOneMonthBtn.style.color = "#054e97";

  timeChoice = "Less than 1 month";

  CurrentTimeChoice.innerText = timeChoice;

  TimeCard.style.display = "none";
  CurrentTimeCard.style.display = "flex";
});

// timeChoice, experience
