const topSkills1 = [
  "Data Entry Specialists",
  "Video Editors",
  "Data Analysts",
  "Shopify Developer",
  "Ruby on Rials Developer",
  "Android Developer",
  "Bookkeeper",
  "Content Writer",
  "Copywriter",
  "Database Administrator",
  "Data Scientist",
  "Front-End Developer",
  "Game Developer",
  "Graphic Developer",
  "iOS Developer",
  "Java Developer",
];
const topSkills2 = [
  "JavaScript Developer",
  "Logo Designer",
  "Mobile App Developer",
  "PHP Developer",
  "Python Developer",
  "Resume Writer",
  "SEO Expert",
  "Social Media Manager",
  "Software Developer",
  "Software Engineer",
  "Technical Writer",
  "UI Designer",
  "UX Designer",
  "Virtual Assistant",
  "Web Designer",
  "Wordpress Developer",
];
const TrendingSkills1 = [
  "Blockchain",
  "Go development",
  "Node.js",
  "Vue.js",
  "HR consulting",
  "Microsoft Power BI",
  "Instructional design",
  "React.js",
  "Videographers",
  "HTML5 Developers",
  "Ghostwriters",
  "Unity 3D Developers",
  "Business Consultants",
  "Coders",
  "Marketing Consultants",
  "Web Developers",
];
const TrendingSkills2 = [
  "Illustrators",
  "Google AdWords Experts",
  "Digital Marketers",
  "Project Managers",
  "Arduino Programmers",
  "Ruby Developers",
  "AngularJS Devleopers",
  "Full Stack Developers",
  "Email Marketing Consultants",
  "React Native Developers",
  "Swift Developers",
  "CSS Developers",
  "Google Sketchup Freelancers",
  "Back End Developers",
  "Smartsheet Freelancers",
  "Zoom Video Conferencing Freelancers",
];
const topSkillBtn = document.getElementById("topSkill");
const trendingSkillBtn = document.getElementById("trendingSkills");
const topSkillUsBtn = document.getElementById("topSkillsUs");
const projectsBtn = document.getElementById("projects");

const topListDiv1 = document.querySelector(".skills-list-1");
const topListDiv2 = document.querySelector(".skills-list-2");
const trendingListDiv1 = document.querySelector(".TrendingSkills-list-1");
const trendingListDiv2 = document.querySelector(".TrendingSkills-list-2");

// Top Skills
topSkillBtn.addEventListener("click", () => {
  //Changes button
  topSkillBtn.classList.add("current");
  trendingSkillBtn.classList.remove("current");
  topSkillUsBtn.classList.remove("current");
  projectsBtn.classList.remove("current");

  trendingListDiv1.classList.add("hide");
  trendingListDiv2.classList.add("hide");

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
  topSkillUsBtn.classList.remove("current");
  projectsBtn.classList.remove("current");

  topListDiv1.classList.add("hide");
  topListDiv2.classList.add("hide");

  trendingListDiv1.classList.remove("hide");
  trendingListDiv2.classList.remove("hide");
  trendingListDiv1.classList.add("show");
  trendingListDiv2.classList.add("show");
});

//Top Skills US Button
topSkillUsBtn.addEventListener("click", () => {
  topSkillUsBtn.classList.add("current");
  topSkillBtn.classList.remove("current");
  trendingSkillBtn.classList.remove("current");
  projectsBtn.classList.remove("current");
});

projectsBtn.addEventListener("click", () => {
  projectsBtn.classList.add("current");
  topSkillBtn.classList.remove("current");
  topSkillUsBtn.classList.remove("current");
  trendingSkillBtn.classList.remove("current");
});

//Header arrows
const ArrowDown1 = document.getElementById("clients");
const ArrowDown2 = document.getElementById("worker");
const ArrowDown3 = document.getElementById("why");

ArrowDown1.addEventListener("mouseover", () => {
  console.log("leo");
});
