const SpecialtyUL1 = document.createElement("ul");
SpecialtyUL1.classList.add("SkillsUnderCategory");

const SpecialtyUL2 = document.createElement("ul");
SpecialtyUL2.classList.add("SkillsUnderCategory");

const SpecialtyUL3 = document.createElement("ul");
SpecialtyUL3.classList.add("SkillsUnderCategory");

const SpecialtyUL4 = document.createElement("ul");
SpecialtyUL4.classList.add("SkillsUnderCategory");

const SpecialtyUL5 = document.createElement("ul");
SpecialtyUL5.classList.add("SkillsUnderCategory");

const SpecialtyUL6 = document.createElement("ul");
SpecialtyUL6.classList.add("SkillsUnderCategory");

const SpecialtyUL7 = document.createElement("ul");
SpecialtyUL7.classList.add("SkillsUnderCategory");

const SpecialtyUL8 = document.createElement("ul");
SpecialtyUL8.classList.add("SkillsUnderCategory");

const SpecialtyUL9 = document.createElement("ul");
SpecialtyUL9.classList.add("SkillsUnderCategory");

const SpecialtyUL10 = document.createElement("ul");
SpecialtyUL10.classList.add("SkillsUnderCategory");

const SpecialtyUL11 = document.createElement("ul");
SpecialtyUL11.classList.add("SkillsUnderCategory");

const SpecialtyUL12 = document.createElement("ul");
SpecialtyUL12.classList.add("SkillsUnderCategory");
//"Accounting & Consulting'
const AccountingConsultingSpecialty = [
  "Business Analysis",
  "Management Consulting",
  "Instructional Design",
  "HR Administration",
  "Recruiting",
  "Training & Development",
  "Lifestyle Coaching",
  "Tax Preparation",
  "Bookkeeping",
  "Accounting",
  "Financial Management/CFO",
  "Financial Analysis & Modeling",
];
for (let i = 0; i < AccountingConsultingSpecialty.length; i++) {
  var specialtyPill = document.createElement("li");

  specialtyPill.innerHTML = AccountingConsultingSpecialty[i].concat(
    "<i class='fa fa-plus'></i>"
  );
  specialtyPill.setAttribute("id", `skillPill${[i]}`);
  SpecialtyUL1.appendChild(specialtyPill);
  specialtyContainer.appendChild(SpecialtyUL1);
}
//"Admin Support"
const AdminSupportSpecialty = [
  "Virtual/Administrative Assistance",
  "Data Entry",
  "Project Management",
  "Transcription",
  "Order Processing",
  "Online Research",
];
for (let i = 0; i < AdminSupportSpecialty.length; i++) {
  var specialtyPill = document.createElement("li");
  specialtyPill.innerHTML = AdminSupportSpecialty[i].concat(
    "<i class='fa fa-plus'></i>"
  );
  specialtyPill.setAttribute("id", "skillPill");
  SpecialtyUL2.appendChild(specialtyPill);
  specialtyContainer.appendChild(SpecialtyUL2);
}
//"Customer Service"
const CustomerServiceSpecialty = ["Customer Service", "Tech Support "];
for (let i = 0; i < CustomerServiceSpecialty.length; i++) {
  var specialtyPill = document.createElement("li");
  specialtyPill.innerHTML = CustomerServiceSpecialty[i].concat(
    "<i class='fa fa-plus'></i>"
  );
  specialtyPill.setAttribute("id", "skillPill");
  SpecialtyUL3.appendChild(specialtyPill);
  specialtyContainer.appendChild(SpecialtyUL3);
}
//"Data Science & Analytics"
const DataScienceAnalyticsSpecialty = [
  "Data Mining",
  "Data Engineering",
  "Data Analytics",
  "Data Visualization",
  "Data Extraction",
  "Data Processing",
  "Deep Learning",
  "Knowledge Representation",
  "Machine Learning",
  "Experimentation & Testing",
  "A/B Testing",
];
for (let i = 0; i < DataScienceAnalyticsSpecialty.length; i++) {
  var specialtyPill = document.createElement("li");
  specialtyPill.innerHTML = DataScienceAnalyticsSpecialty[i].concat(
    "<i class='fa fa-plus'></i>"
  );
  specialtyPill.setAttribute("id", "skillPill");
  SpecialtyUL4.appendChild(specialtyPill);
  specialtyContainer.appendChild(SpecialtyUL4);
}
//"Design & Creative",
const DesignCreativeSpecialty = [
  "Brand Identity Design",
  "Logo Design",
  "Singing",
  "Acting",
  "Voice Talent",
  "Visual Effects",
  "2D Animation",
  "Video Editing",
  "Video Production",
  "Motion Graphics",
  "Videography",
  "3D Animation",
  "Packaging Design",
  "Art Direction",
  "Image Editing",
  "Presentation Design",
  "Creative Direction",
  "Editorial Design",
  "Cartoons & Comics",
  "Pattern Design",
  "Fine Art",
  "Caricatures & Portraits",
  "Illustration",
  "Musician",
  "Music Composition",
  "Music Production",
  "Audio Editing",
  "Audio Production",
  "Fashion Design",
  "Jewelry Design",
  "Product & Industrial Design",
  "AR/VR Design",
  "Game Art",
  "Product Photography",
  "Local Photography ",
];
for (let i = 0; i < DesignCreativeSpecialty.length; i++) {
  var specialtyPill = document.createElement("li");
  specialtyPill.innerHTML = DesignCreativeSpecialty[i].concat(
    "<i class='fa fa-plus'></i>"
  );
  specialtyPill.setAttribute("id", "skillPill");
  SpecialtyUL5.appendChild(specialtyPill);
  specialtyContainer.appendChild(SpecialtyUL5);
}
//"Engineering & Architecture
const EngineeringArchitectureSpeciality = [
  "Structural Engineering",
  "Building Information Modeling",
  "Civil Engineering",
  "3D Modeling & Rendering",
  "CAD",
  "Landscape Architecture",
  "Architecture",
  "Interior Design",
  "Trade Show Design",
  "Mechanical Engineering",
  "Chemical & Process Engineering",
  "STEM Tutoring",
  "Energy Engineering",
  "Electronic Engineering",
  "Electrical Engineering",
  "Physics",
  "Mathematics",
  "Biology",
  "Chemistry",
  "Logistics & Supply Chain Management",
  "Sourcing & Procurement",
];
for (let i = 0; i < EngineeringArchitectureSpeciality.length; i++) {
  var specialtyPill = document.createElement("li");
  specialtyPill.innerHTML = EngineeringArchitectureSpeciality[i].concat(
    "<i class='fa fa-plus'></i>"
  );
  specialtyPill.setAttribute("id", "skillPill");
  SpecialtyUL6.appendChild(specialtyPill);
  specialtyContainer.appendChild(SpecialtyUL6);
}
//"IT & Networking"
const ITNetworkingSpecialty = [
  "Network Security",
  "IT Compliance",
  "Information Security",
  "Database Administration",
  "Cloud Engineering",
  "Solutions Architecture",
  "IT Support",
  "DevOps Engineering",
  "Business Applications Development",
  "Systems Engineering",
  "Systems Administration",
  "Network Administration",
];
for (let i = 0; i < ITNetworkingSpecialty.length; i++) {
  var specialtyPill = document.createElement("li");
  specialtyPill.innerHTML = ITNetworkingSpecialty[i].concat(
    "<i class='fa fa-plus'></i>"
  );
  specialtyPill.setAttribute("id", "skillPill");
  SpecialtyUL7.appendChild(specialtyPill);
  specialtyContainer.appendChild(SpecialtyUL7);
}
//"Legal"
const LegalSpecialty = [
  "Business & Corporate Law",
  "General Counsel",
  "Tax Law",
  "Labor & Employment Law",
  "International Law",
  "Regulatory Law",
  "Securities & Finance Law",
  "Immigration Law",
  "Intellectual Property Law",
  "Paralegal",
];
for (let i = 0; i < LegalSpecialty.length; i++) {
  var specialtyPill = document.createElement("li");
  specialtyPill.innerHTML = LegalSpecialty[i].concat(
    "<i class='fa fa-plus'></i>"
  );
  specialtyPill.setAttribute("id", "skillPill");
  SpecialtyUL8.appendChild(specialtyPill);
  specialtyContainer.appendChild(SpecialtyUL8);
}
//"Sales & Marketing"
const SalesMarketingSpecialty = [
  "Social Media Strategy",
  "Marketing Strategy",
  "Content Strategy",
  "Brand Strategy",
  "Public Relations",
  "Social Media Marketing",
  "Market Research",
  "Community Management",
  "Email Marketing",
  "Marketing Automation",
  "Campaign Management",
  "Digital Marketing",
  "Search Engine Optimization",
  "Telemarketing",
  "Search Engine Marketing",
  "Lead Generation",
  "Sales & Business Development",
];
for (let i = 0; i < SalesMarketingSpecialty.length; i++) {
  var specialtyPill = document.createElement("li");
  specialtyPill.innerHTML = SalesMarketingSpecialty[i].concat(
    "<i class='fa fa-plus'></i>"
  );
  specialtyPill.setAttribute("id", "skillPill");
  SpecialtyUL9.appendChild(specialtyPill);
  specialtyContainer.appendChild(SpecialtyUL9);
}
//"Translation"
const TranslationSpecialty = [
  "Legal Translation",
  "Technical Translation",
  "Language Tutoring",
  "Translation",
  "Language Localization",
  "Medical Translation",
];
for (let i = 0; i < TranslationSpecialty.length; i++) {
  var specialtyPill = document.createElement("li");
  specialtyPill.innerHTML = TranslationSpecialty[i].concat(
    "<i class='fa fa-plus'></i>"
  );
  specialtyPill.setAttribute("id", "skillPill");
  SpecialtyUL10.appendChild(specialtyPill);
  specialtyContainer.appendChild(SpecialtyUL10);
}
//"Web, Mobile & Software Dev"
const WebMobileSoftwareSpecialty = [
  "Ecommerce Development",
  "Desktop Software Development",
  "Scripting & Automation",
  "Manual Testing",
  "Automation Testing",
  "Mobile App Development",
  "Mobile Game Development",
  "Prototyping",
  "Mobile Design",
  "Web Design",
  "User Research",
  "UX/UI Design",
  "Firmware Development",
  "Emerging Tech",
  "AR/VR Development",
  "Coding Tutoring",
  "Database Development",
  "Scrum Master",
  "Product Management",
  "Back-End Development",
  "Front-End Development",
  "Full Stack Development",
  "CMS Development",
  "Game Development",
];
for (let i = 0; i < WebMobileSoftwareSpecialty.length; i++) {
  var specialtyPill = document.createElement("li");
  specialtyPill.innerHTML = WebMobileSoftwareSpecialty[i].concat(
    "<i class='fa fa-plus'></i>"
  );
  specialtyPill.setAttribute("id", "skillPill");
  SpecialtyUL11.appendChild(specialtyPill);
  specialtyContainer.appendChild(SpecialtyUL11);
}
//"Writing"
const WritingSpecialty = [
  "Editing & Proofreading",
  "Career Coaching",
  "Scriptwriting",
  "Creative Writing",
  "Ghostwriting",
  "Grant Writing",
  "Technical Writing",
  "Writing Tutoring",
  "Business Writing",
  "Content Writing",
  "Copywriting",
];
for (let i = 0; i < WritingSpecialty.length; i++) {
  var specialtyPill = document.createElement("li");
  specialtyPill.innerHTML = WritingSpecialty[i].concat(
    "<i class='fa fa-plus'></i>"
  );
  specialtyPill.setAttribute("id", "skillPill");
  SpecialtyUL12.appendChild(specialtyPill);
  specialtyContainer.appendChild(SpecialtyUL12);
}

var selectedCategorySpan = document.getElementById("selectedCategory");
SpecialtyUL1.style.display = "flex";
SpecialtyUL2.style.display = "none";
SpecialtyUL3.style.display = "none";
SpecialtyUL4.style.display = "none";
SpecialtyUL5.style.display = "none";
SpecialtyUL6.style.display = "none";
SpecialtyUL7.style.display = "none";
SpecialtyUL8.style.display = "none";
SpecialtyUL9.style.display = "none";
SpecialtyUL10.style.display = "none";
SpecialtyUL11.style.display = "none";
SpecialtyUL12.style.display = "none";

const e = document.getElementById("categoryID");
e.addEventListener("input", () => {
  var value = e.options[e.selectedIndex].value;
  var text = e.options[e.selectedIndex].text;
  selectedCategorySpan.innerText =
    document.getElementById("categoryID").selectedOptions[0].text;

  if (selectedCategorySpan.innerText.localeCompare("Writing") === 0) {
    SpecialtyUL1.style.display = "none";
    SpecialtyUL12.style.display = "flex";
  } else {
    SpecialtyUL12.style.display = "none";
  }
  if (
    selectedCategorySpan.innerText.localeCompare(
      "Web, Mobile & Software Dev"
    ) === 0
  ) {
    SpecialtyUL11.style.display = "flex";
    SpecialtyUL1.style.display = "none";
  } else {
    SpecialtyUL11.style.display = "none";
  }

  if (selectedCategorySpan.innerText.localeCompare("Admin Support") === 0) {
    SpecialtyUL2.style.display = "flex";
    SpecialtyUL1.style.display = "none";
  } else {
    SpecialtyUL2.style.display = "none";
  }

  if (selectedCategorySpan.innerText.localeCompare("Customer Service") === 0) {
    SpecialtyUL3.style.display = "flex";
    SpecialtyUL1.style.display = "none";
  } else {
    SpecialtyUL3.style.display = "none";
  }

  if (
    selectedCategorySpan.innerText.localeCompare("Data Science & Analytics") ===
    0
  ) {
    SpecialtyUL4.style.display = "flex";
    SpecialtyUL1.style.display = "none";
  } else {
    SpecialtyUL4.style.display = "none";
  }

  if (selectedCategorySpan.innerText.localeCompare("Design & Creative") === 0) {
    SpecialtyUL5.style.display = "flex";
    SpecialtyUL1.style.display = "none";
  } else {
    SpecialtyUL5.style.display = "none";
  }

  if (
    selectedCategorySpan.innerText.localeCompare(
      "Engineering & Architecture"
    ) === 0
  ) {
    SpecialtyUL6.style.display = "flex";
    SpecialtyUL1.style.display = "none";
  } else {
    SpecialtyUL6.style.display = "none";
  }

  if (selectedCategorySpan.innerText.localeCompare("IT & Networking") === 0) {
    SpecialtyUL7.style.display = "flex";
    SpecialtyUL1.style.display = "none";
  } else {
    SpecialtyUL7.style.display = "none";
  }

  if (selectedCategorySpan.innerText.localeCompare("Legal") === 0) {
    SpecialtyUL8.style.display = "flex";
    SpecialtyUL1.style.display = "none";
  } else {
    SpecialtyUL8.style.display = "none";
  }

  if (selectedCategorySpan.innerText.localeCompare("Sales & Marketing") === 0) {
    SpecialtyUL9.style.display = "flex";
    SpecialtyUL1.style.display = "none";
  } else {
    SpecialtyUL9.style.display = "none";
  }

  if (selectedCategorySpan.innerText.localeCompare("Translation") === 0) {
    SpecialtyUL10.style.display = "flex";
    SpecialtyUL1.style.display = "none";
  } else {
    SpecialtyUL10.style.display = "none";
  }

  if (
    selectedCategorySpan.innerText.localeCompare("Accounting & Consulting") ===
    0
  ) {
    SpecialtyUL1.style.display = "flex";
  } else {
    SpecialtyUL1.style.display = "none";
  }
});

//All Specialty
const AllSpecialty = WritingSpecialty.concat(WebMobileSoftwareSpecialty)
  .concat(TranslationSpecialty)
  .concat(SalesMarketingSpecialty)
  .concat(LegalSpecialty)
  .concat(ITNetworkingSpecialty)
  .concat(EngineeringArchitectureSpeciality)
  .concat(DesignCreativeSpecialty)
  .concat(DataScienceAnalyticsSpecialty)
  .concat(CustomerServiceSpecialty)
  .concat(AdminSupportSpecialty)
  .concat(AccountingConsultingSpecialty);

//All Categories
const AllCategories = [
  "Accounting & Consulting",
  "Admin Support",
  "Customer Service",
  "Data Science & Analytics",
  "Design & Creative",
  "Engineering & Architecture",
  "IT & Networking",
  "Legal",
  "Sales & Marketing",
  "Translation",
  "Web, Mobile & Software Dev",
  "Writing",
];

//ALL SKILLS
const AllSkills = AllDevelopmentIT.concat(AllCreativeDesign)
  .concat(AllSalesMarketing)
  .concat(AllWritingTranslation)
  .concat(AllAdminCustomer)
  .concat(AllFinanceAccounting)
  .concat(AllLegal)
  .concat(AllHRTraining)
  .concat(AllEngineerArchitecture)
  .concat(WritingSpecialty)
  .concat(WebMobileSoftwareSpecialty)
  .concat(TranslationSpecialty)
  .concat(SalesMarketingProjects)
  .concat(LegalSpecialty)
  .concat(ITNetworkingSpecialty)
  .concat(EngineeringArchitectureSpeciality)
  .concat(DesignCreativeSpecialy)
  .concat(DataScienceAnalyticsSpecialty)
  .concat(CustomerServiceSpecialty)
  .concat(AdminSupportSpecialty)
  .concat(AccountingConsultingSpecialty);

//Removing all duplicates
let AllSkills2 = [];
AllSkills.forEach((c) => {
  if (!AllSkills2.includes(c)) {
    AllSkills2.push(c);
  }
});

const AllSkillsDatalist = document.getElementById("allskills");

for (let i = 0; i < AllSkills2.length; i++) {
  var option = document.createElement("option");

  option.value = AllSkills2[i];

  AllSkillsDatalist.appendChild(option);
}
