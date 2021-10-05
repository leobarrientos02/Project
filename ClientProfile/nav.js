//Mobile Javascript
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

function displayX(x) {
  return (x.style.display = "inline-block");
}
function blockX(x) {
  return (x.style.display = "none");
}

const sessionCard = document.querySelector(".sessionCard");
const profileImage = document.getElementById("profileImage1");
const profileImageTemp = document.getElementById("profileImageTemp"); // Used to close nav

// Help Pulldown
const questionMark = document.getElementById("question");
const questionMarkTemp = document.getElementById("questionTemp"); // Used to close pulldown
const helpCardPulldown = document.querySelector(".helpCard");

//jobs Pulldown
const jobCardPulldown = document.querySelector(".jobCard");
const jobs = document.getElementById("jobs");
const jobsTemp = document.getElementById("jobsTemp");

// talents pulldown
const talentCardPulldown = document.querySelector(".talentCard");
const talents = document.getElementById("talents");
const talentsTemp = document.getElementById("talentsTemp");

// projects pulldown
const projectCardPulldown = document.querySelector(".projectCard");
const projects = document.getElementById("projects");
const projectsTemp = document.getElementById("projectsTemp");

profileImage.addEventListener("click", () => {
  //Pullldown
  displayX(sessionCard);

  //Block
  blockX(jobCardPulldown);
  blockX(talentCardPulldown);
  blockX(projectCardPulldown);
  blockX(helpCardPulldown);

  //Trigger
  blockX(profileImage);
  displayX(profileImageTemp);

  //Display Actual
  displayX(jobs);
  displayX(talents);
  displayX(projects);
  displayX(questionMark);
  //Block Temps
  blockX(jobsTemp);
  blockX(talentsTemp);
  blockX(projectsTemp);
  blockX(questionMarkTemp);
});
profileImageTemp.addEventListener("click", () => {
  //Pulldown
  blockX(sessionCard);
  blockX(jobCardPulldown);
  blockX(talentCardPulldown);
  blockX(projectCardPulldown);
  blockX(helpCardPulldown);
  //Trigger
  blockX(profileImageTemp);
  displayX(profileImage);

  //Display Actual
  displayX(jobs);
  displayX(talents);
  displayX(projects);
  displayX(questionMark);
  //Block Temps
  blockX(jobsTemp);
  blockX(talentsTemp);
  blockX(projectsTemp);
  blockX(questionMarkTemp);
});
questionMark.addEventListener("click", () => {
  //Pullldown
  displayX(helpCardPulldown);

  //Block
  blockX(jobCardPulldown);
  blockX(talentCardPulldown);
  blockX(projectCardPulldown);
  blockX(sessionCard);

  blockX(questionMark);
  displayX(questionMarkTemp);

  //Display Actual
  displayX(jobs);
  displayX(talents);
  displayX(projects);
  displayX(profileImage);
  //Block Temps
  blockX(jobsTemp);
  blockX(talentsTemp);
  blockX(projectsTemp);
  blockX(profileImageTemp);
});
questionMarkTemp.addEventListener("click", () => {
  //Pulldown
  blockX(sessionCard);
  blockX(jobCardPulldown);
  blockX(talentCardPulldown);
  blockX(projectCardPulldown);
  blockX(helpCardPulldown);

  blockX(questionMarkTemp);
  displayX(questionMark);

  //Display Actual
  displayX(jobs);
  displayX(talents);
  displayX(projects);
  displayX(profileImage);
  //Block Temps
  blockX(jobsTemp);
  blockX(talentsTemp);
  blockX(projectsTemp);
  blockX(profileImageTemp);
});

jobs.addEventListener("click", () => {
  //Pullldown
  displayX(jobCardPulldown);

  //Block
  blockX(sessionCard);
  blockX(talentCardPulldown);
  blockX(projectCardPulldown);
  blockX(helpCardPulldown);

  blockX(jobs);
  displayX(jobsTemp);

  //Display Actual
  displayX(questionMark);
  displayX(talents);
  displayX(projects);
  displayX(profileImage);
  //Block Temps
  blockX(questionMarkTemp);
  blockX(talentsTemp);
  blockX(projectsTemp);
  blockX(profileImageTemp);
});
jobsTemp.addEventListener("click", () => {
  //Pulldown
  blockX(sessionCard);
  blockX(jobCardPulldown);
  blockX(talentCardPulldown);
  blockX(projectCardPulldown);
  blockX(helpCardPulldown);

  blockX(jobsTemp);
  displayX(jobs);

  //Display Actual
  displayX(questionMark);
  displayX(talents);
  displayX(projects);
  displayX(profileImage);
  //Block Temps
  blockX(questionMarkTemp);
  blockX(talentsTemp);
  blockX(projectsTemp);
  blockX(profileImageTemp);
});

talents.addEventListener("click", () => {
  //Pullldown
  displayX(talentCardPulldown);

  //Block
  blockX(jobCardPulldown);
  blockX(sessionCard);
  blockX(projectCardPulldown);
  blockX(helpCardPulldown);

  blockX(talents);
  displayX(talentsTemp);

  //Display Actual
  displayX(questionMark);
  displayX(jobs);
  displayX(projects);
  displayX(profileImage);
  //Block Temps
  blockX(questionMarkTemp);
  blockX(jobsTemp);
  blockX(projectsTemp);
  blockX(profileImageTemp);
});
talentsTemp.addEventListener("click", () => {
  //Pulldown
  blockX(sessionCard);
  blockX(jobCardPulldown);
  blockX(talentCardPulldown);
  blockX(projectCardPulldown);
  blockX(helpCardPulldown);

  blockX(talentsTemp);
  displayX(talents);

  //Display Actual
  displayX(questionMark);
  displayX(jobs);
  displayX(projects);
  displayX(profileImage);
  //Block Temps
  blockX(questionMarkTemp);
  blockX(jobsTemp);
  blockX(projectsTemp);
  blockX(profileImageTemp);
});

projects.addEventListener("click", () => {
  //Pullldown
  displayX(projectCardPulldown);

  //Block
  blockX(jobCardPulldown);
  blockX(talentCardPulldown);
  blockX(sessionCard);
  blockX(helpCardPulldown);

  blockX(projects);
  displayX(projectsTemp);

  //Display Actual
  displayX(questionMark);
  displayX(jobs);
  displayX(talents);
  displayX(profileImage);
  //Block Temps
  blockX(questionMarkTemp);
  blockX(jobsTemp);
  blockX(talentsTemp);
  blockX(profileImageTemp);
});
projectsTemp.addEventListener("click", () => {
  //Pulldown
  blockX(sessionCard);
  blockX(jobCardPulldown);
  blockX(talentCardPulldown);
  blockX(projectCardPulldown);
  blockX(helpCardPulldown);

  blockX(projectsTemp);
  displayX(projects);

  //Display Actual
  displayX(questionMark);
  displayX(jobs);
  displayX(talents);
  displayX(profileImage);
  //Block Temps
  blockX(questionMarkTemp);
  blockX(jobsTemp);
  blockX(talentsTemp);
  blockX(profileImageTemp);
});
