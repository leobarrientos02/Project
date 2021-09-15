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

const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");
const arrow3 = document.getElementById("arrow3");

const arrow1UP = document.getElementById("arrow1UP");
const arrow2UP = document.getElementById("arrow2UP");
const arrow3UP = document.getElementById("arrow3UP");

const clientPulldown = document.querySelector(".client-pulldown");
const freelancePulldown = document.querySelector(".freelance-pulldown");
const ezworkPulldown = document.querySelector(".ezwork-pulldown");

const categories = document.getElementById("categories");

ArrowDown1.addEventListener("mouseover", () => {
  categories.style.display = "none";
  clientPulldown.style.display = "block";

  arrow1.classList.add("hide");
  arrow1UP.classList.remove("hide");
});
ArrowDown1.addEventListener("mouseleave", () => {
  categories.style.display = "block";
  clientPulldown.style.display = "none";

  arrow1UP.classList.add("hide");
  arrow1.classList.remove("hide");
});

ArrowDown2.addEventListener("mouseover", () => {
  categories.style.display = "none";
  freelancePulldown.style.display = "block";

  arrow2.classList.add("hide");
  arrow2UP.classList.remove("hide");
});
ArrowDown2.addEventListener("mouseleave", () => {
  categories.style.display = "block";
  freelancePulldown.style.display = "none";

  arrow2UP.classList.add("hide");
  arrow2.classList.remove("hide");
});

ArrowDown3.addEventListener("mouseover", () => {
  categories.style.display = "none";
  ezworkPulldown.style.display = "block";

  arrow3.classList.add("hide");
  arrow3UP.classList.remove("hide");
});
ArrowDown3.addEventListener("mouseleave", () => {
  categories.style.display = "block";
  ezworkPulldown.style.display = "none";

  arrow3UP.classList.add("hide");
  arrow3.classList.remove("hide");
});

// Header arrows Functionality Ends Here

// Skills section
// Buttons
const developement_IT = document.getElementById("developement_IT");
const design_creative = document.getElementById("design_creative ");
const sales_marketing = document.getElementById("sales_marketing");
const writing_translation = document.getElementById("writing_translation");
const admin_customer = document.getElementById("admin_customer");
const finance_accounting = document.getElementById("finance_accounting");
const see_all_skills = document.getElementById("see_all_skills");

//Image
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");
const image6 = document.getElementById("image6");

//Divs
const results1 = document.querySelector(".results1");
const results2 = document.querySelector(".results2");
const results3 = document.querySelector(".results3");
const results4 = document.querySelector(".results4");
const results5 = document.querySelector(".results5");
const results6 = document.querySelector(".results6");

// Button1
developement_IT.addEventListener("click", () => {
  developement_IT.classList.add("current");
  design_creative.classList.remove("current");
  sales_marketing.classList.remove("current");
  writing_translation.classList.remove("current");
  admin_customer.classList.remove("current");
  finance_accounting.classList.remove("current");
  see_all_skills.classList.remove("current");

  //Toggle the images
  image1.style.display = "block";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "none";
  image5.style.display = "none";
  image6.style.display = "none";

  //Toggle the div
  results1.classList.remove("hide");
  results1.classList.add("show2");
  results2.classList.add("hide");
  results3.classList.add("hide");
  results4.classList.add("hide");
  results5.classList.add("hide");
  results6.classList.add("hide");
});

//Button2
design_creative.addEventListener("click", () => {
  design_creative.classList.add("current");
  developement_IT.classList.remove("current");
  sales_marketing.classList.remove("current");
  writing_translation.classList.remove("current");
  admin_customer.classList.remove("current");
  finance_accounting.classList.remove("current");
  see_all_skills.classList.remove("current");

  image1.style.display = "none";
  image2.style.display = "block";
  image3.style.display = "none";
  image4.style.display = "none";
  image5.style.display = "none";
  image6.style.display = "none";

  results2.classList.remove("hide");
  results2.classList.add("show2");
  results1.classList.add("hide");
  results3.classList.add("hide");
  results4.classList.add("hide");
  results5.classList.add("hide");
  results6.classList.add("hide");
});

//Button3
sales_marketing.addEventListener("click", () => {
  sales_marketing.classList.add("current");
  developement_IT.classList.remove("current");
  design_creative.classList.remove("current");
  writing_translation.classList.remove("current");
  admin_customer.classList.remove("current");
  finance_accounting.classList.remove("current");
  see_all_skills.classList.remove("current");

  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "block";
  image4.style.display = "none";
  image5.style.display = "none";
  image6.style.display = "none";

  results3.classList.remove("hide");
  results3.classList.add("show2");
  results1.classList.add("hide");
  results2.classList.add("hide");
  results4.classList.add("hide");
  results5.classList.add("hide");
  results6.classList.add("hide");
});

//Button4
writing_translation.addEventListener("click", () => {
  writing_translation.classList.add("current");
  sales_marketing.classList.remove("current");
  developement_IT.classList.remove("current");
  design_creative.classList.remove("current");
  admin_customer.classList.remove("current");
  finance_accounting.classList.remove("current");
  see_all_skills.classList.remove("current");

  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "block";
  image5.style.display = "none";
  image6.style.display = "none";

  results4.classList.remove("hide");
  results4.classList.add("show2");
  results1.classList.add("hide");
  results2.classList.add("hide");
  results3.classList.add("hide");
  results5.classList.add("hide");
  results6.classList.add("hide");
});

//Button5
admin_customer.addEventListener("click", () => {
  admin_customer.classList.add("current");
  writing_translation.classList.remove("current");
  sales_marketing.classList.remove("current");
  developement_IT.classList.remove("current");
  design_creative.classList.remove("current");
  finance_accounting.classList.remove("current");
  see_all_skills.classList.remove("current");

  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "none";
  image5.style.display = "block";
  image6.style.display = "none";

  results5.classList.remove("hide");
  results5.classList.add("show2");
  results1.classList.add("hide");
  results2.classList.add("hide");
  results3.classList.add("hide");
  results4.classList.add("hide");
  results6.classList.add("hide");
});

// Button6
finance_accounting.addEventListener("click", () => {
  finance_accounting.classList.add("current");
  admin_customer.classList.remove("current");
  writing_translation.classList.remove("current");
  sales_marketing.classList.remove("current");
  developement_IT.classList.remove("current");
  design_creative.classList.remove("current");
  see_all_skills.classList.remove("current");

  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "none";
  image5.style.display = "none";
  image6.style.display = "block";

  results6.classList.remove("hide");
  results6.classList.add("show2");
  results1.classList.add("hide");
  results2.classList.add("hide");
  results3.classList.add("hide");
  results4.classList.add("hide");
  results5.classList.add("hide");
});

//Button7
see_all_skills.addEventListener("click", () => {
  see_all_skills.classList.add("current");
  finance_accounting.classList.remove("current");
  admin_customer.classList.remove("current");
  writing_translation.classList.remove("current");
  sales_marketing.classList.remove("current");
  developement_IT.classList.remove("current");
  design_creative.classList.remove("current");

  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "none";
  image5.style.display = "none";
  image6.style.display = "none";

  results1.classList.add("hide");
  results2.classList.add("hide");
  results3.classList.add("hide");
  results4.classList.add("hide");
  results5.classList.add("hide");
  results6.classList.add("hide");
});
