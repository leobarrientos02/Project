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
