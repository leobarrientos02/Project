//Skills carousel
//Get Elements
const skillTitle = document.getElementById("skill");
const skillImage = document.querySelector(".profile-skills-images");

var slideIndex = [1, 1];
var slideId = ["profile-skills"];

showSlides(1, 0);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}
function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}

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
