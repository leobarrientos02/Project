const usOnlyCard = document.getElementById("usOnly");
const worldwideCard = document.getElementById("worldwide");

//Buttons for cards
const worldwideBtn = document.getElementById("worlwide-button");
const usOnlyBtn = document.getElementById("usOnly-button");

// Us locations And worldwide locations
const usOnlyLocations = document.querySelector(".usOnlyCard");
const worldwideLocations = document.querySelector(".worldwideCard");

worldwideCard.addEventListener("click", () => {
  worldwideCard.style.border = "1.25px solid #054e97";
  worldwideBtn.style.color = "#054e97";
  worldwideBtn.style.border = "1.25px solid #054e97";

  usOnlyCard.style.border = "1.25px solid lightgrey";
  usOnlyBtn.style.color = "transparent";
  usOnlyBtn.style.border = "1.25px solid lightgrey";

  worldwideLocations.style.display = "inline-block";
  usOnlyLocations.style.display = "none";
});
usOnlyCard.addEventListener("click", () => {
  usOnlyCard.style.border = "1.25px solid #054e97";
  usOnlyBtn.style.color = "#054e97";
  usOnlyBtn.style.border = "1.25px solid #054e97";

  worldwideCard.style.border = "1.25px solid lightgrey";
  worldwideBtn.style.color = "transparent";
  worldwideBtn.style.border = "1.25px solid lightgrey";

  usOnlyLocations.style.display = "inline-block";
  worldwideLocations.style.display = "none";
});

const selectedWorldwideLocations = [];
const selectedUsLocations = [];
const selectedLocations = [];

const e = document.getElementById("TimeZones&StatesID");

const addBtn1 = document.getElementById("add1");
const addBtn2 = document.getElementById("add2");

const selectedLocationsCard = document.querySelector(".selectedLocationsCard");
const selectedLocationsContainer = document.querySelector(".selectedLocations");

addBtn1.addEventListener("click", () => {
  //console.log(e.value);
  var locationPill = document.createElement("label");
  locationPill.innerHTML = e.value;

  selectedUsLocations.push(e.value);

  selectedLocationsCard.style.display = "inline-block";
  selectedLocationsContainer.appendChild(locationPill);
  console.log(selectedUsLocations);

  if (selectedUsLocations.length > 0) {
    locationPill.addEventListener("click", () => {
      selectedLocationsContainer.removeChild(locationPill);
      selectedUsLocations.pop(locationPill.innerHTML);
      console.log(selectedUsLocations);
    });
  }
});
