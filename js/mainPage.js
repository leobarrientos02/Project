//SKills Directory Functionality Getting Elements
const topSkillBtn = document.getElementById("topSkill");
const trendingSkillBtn = document.getElementById("trendingSkills");
const UsTopSkillBtn = document.getElementById("topSkillsUs");
const projectsBtn = document.getElementById("projects");

const topListDiv1 = document.querySelector(".skills-list-1");
const topListDiv2 = document.querySelector(".skills-list-2");
const trendingListDiv1 = document.querySelector(".TrendingSkills-list-1");
const trendingListDiv2 = document.querySelector(".TrendingSkills-list-2");
const UsTopListDiv1 = document.querySelector(".UsTop-list-1");
const UsTopListDiv2 = document.querySelector(".UsTop-list-2");
const projectsListDiv1 = document.querySelector(".projects-list-1");
const projectsListDiv2 = document.querySelector(".projects-list-2");

// Top Skills
topSkillBtn.addEventListener("click", () => {
  //Changes button
  topSkillBtn.classList.add("current");
  trendingSkillBtn.classList.remove("current");
  UsTopSkillBtn.classList.remove("current");
  projectsBtn.classList.remove("current");

  trendingListDiv1.classList.add("hide");
  trendingListDiv2.classList.add("hide");
  UsTopListDiv1.classList.add("hide");
  UsTopListDiv2.classList.add("hide");
  projectsListDiv1.classList.add("hide");
  projectsListDiv2.classList.add("hide");

  //TOggle classes
  topListDiv1.classList.remove("hide");
  topListDiv2.classList.remove("hide");
  topListDiv1.classList.add("show");
  topListDiv2.classList.add("show");
});

//Trending Button
trendingSkillBtn.addEventListener("click", async () => {
  trendingSkillBtn.classList.add("current");
  topSkillBtn.classList.remove("current");
  UsTopSkillBtn.classList.remove("current");
  projectsBtn.classList.remove("current");

  UsTopListDiv1.classList.add("hide");
  UsTopListDiv2.classList.add("hide");
  projectsListDiv1.classList.add("hide");
  projectsListDiv2.classList.add("hide");
  topListDiv1.classList.add("hide");
  topListDiv2.classList.add("hide");

  trendingListDiv1.classList.remove("hide");
  trendingListDiv2.classList.remove("hide");
  trendingListDiv1.classList.add("show");
  trendingListDiv2.classList.add("show");
});

//Top Skills US Button
UsTopSkillBtn.addEventListener("click", () => {
  UsTopSkillBtn.classList.add("current");
  topSkillBtn.classList.remove("current");
  trendingSkillBtn.classList.remove("current");
  projectsBtn.classList.remove("current");

  trendingListDiv1.classList.add("hide");
  trendingListDiv2.classList.add("hide");
  projectsListDiv1.classList.add("hide");
  projectsListDiv2.classList.add("hide");
  topListDiv1.classList.add("hide");
  topListDiv2.classList.add("hide");

  UsTopListDiv1.classList.remove("hide");
  UsTopListDiv2.classList.remove("hide");
  UsTopListDiv1.classList.add("show");
  UsTopListDiv2.classList.add("show");
});

//Projects
projectsBtn.addEventListener("click", () => {
  projectsBtn.classList.add("current");
  topSkillBtn.classList.remove("current");
  UsTopSkillBtn.classList.remove("current");
  trendingSkillBtn.classList.remove("current");

  trendingListDiv1.classList.add("hide");
  trendingListDiv2.classList.add("hide");
  UsTopListDiv1.classList.add("hide");
  UsTopListDiv2.classList.add("hide");
  topListDiv1.classList.add("hide");
  topListDiv2.classList.add("hide");

  projectsListDiv1.classList.remove("hide");
  projectsListDiv2.classList.remove("hide");
  projectsListDiv1.classList.add("show");
  projectsListDiv2.classList.add("show");
});
// Skills Directory Tree ends here

// Header arrows Functionality
const ArrowDown1 = document.getElementById("clients");
const ArrowDown2 = document.getElementById("worker");
const ArrowDown3 = document.getElementById("why");

ArrowDown1.addEventListener("mouseover", () => {
  console.log("leo");
});
// Header arrows Functionality Ends Here
