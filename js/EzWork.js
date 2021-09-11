//Add to the Categories array to add more into the Search by Category Section
const Categories = [
  "System Developer",
  "Web Developer",
  "Software Engineer",
  "Musician",
  "Singer",
  "Network Architect",
  "Personal Trainer",
  "Data Analytics",
  "Dog Keeper",
  "Hacker",
  "Designer",
  "Coder",
  "Fashion Designer",
  "Ios Development",
  "Andriod Development",
  "Accountant",
  "Writer",
  "Tutor",
  "Chef",
  "Hair Stylist",
];

const container1 = document.querySelector(".categories-section");

const categories = document.createElement("div");
categories.classList.add("categories");

for (let i = 0; i < Categories.length; i++) {
  const category = document.createElement("div");
  category.classList.add("category");
  category.innerText = Categories[i];
  categories.appendChild(category);
}
container1.appendChild(categories);
