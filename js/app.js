const category_container = document.querySelector(".categories");
const category1 = document.querySelector(".category1");
const category2 = document.querySelector(".category2");
const category3 = document.querySelector(".category3");
const category4 = document.querySelector(".category4");
const category5 = document.querySelector(".category5");
const category6 = document.querySelector(".category6");
const category7 = document.querySelector(".category7");
const category8 = document.querySelector(".category8");
const category9 = document.querySelector(".category9");
const category10 = document.querySelector(".category10");
const category11 = document.querySelector(".category11");
const category12 = document.querySelector(".category12");
const arrow_back = document.querySelector(".arrow-back");
const arrow_f = document.querySelector(".arrow-forward");

arrow_back.addEventListener("click", (event) => {
  category1.style.display = "none";
  category2.style.display = "none";
  category3.style.display = "none";
  category4.style.display = "none";
  category5.style.display = "none";
  category6.style.display = "none";
  arrow_back.style.display = "none";

  category12.style.display = "block";
  category7.style.display = "block";
  category11.style.display = "block";
  category10.style.display = "block";
  category9.style.display = "block";
  category8.style.display = "block";
});
