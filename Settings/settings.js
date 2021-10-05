//Settings Nav
const myInfo = document.getElementById("myInfo");
const passwordSecurity = document.getElementById("passwordSecurity");
const billingMethods = document.getElementById("billingMethods");
const notification = document.getElementById("notification");
const connectedServices = document.getElementById("connectedServices");

const settingsTitle = document.getElementById("settings-title");

myInfo.addEventListener("click", () => {
  myInfo.style.background = "lightgrey";
  passwordSecurity.style.background = "transparent";
  billingMethods.style.background = "transparent";
  notification.style.background = "transparent";
  connectedServices.style.background = "transparent";

  settingsTitle.innerText = "My Info";
});

passwordSecurity.addEventListener("click", () => {
  myInfo.style.background = "transparent";
  passwordSecurity.style.background = "lightgrey";
  billingMethods.style.background = "transparent";
  notification.style.background = "transparent";
  connectedServices.style.background = "transparent";

  settingsTitle.innerText = "Password & Security";
});

billingMethods.addEventListener("click", () => {
  myInfo.style.background = "transparent";
  passwordSecurity.style.background = "transparent";
  billingMethods.style.background = "lightgrey";
  notification.style.background = "transparent";
  connectedServices.style.background = "transparent";

  settingsTitle.innerText = "Billing Methods";
});
notification.addEventListener("click", () => {
  myInfo.style.background = "transparent";
  passwordSecurity.style.background = "transparent";
  billingMethods.style.background = "transparent";
  notification.style.background = "lightgrey";
  connectedServices.style.background = "transparent";

  settingsTitle.innerText = "Notification Settings";
});
connectedServices.addEventListener("click", () => {
  myInfo.style.background = "transparent";
  passwordSecurity.style.background = "transparent";
  billingMethods.style.background = "transparent";
  notification.style.background = "transparent";
  connectedServices.style.background = "lightgrey";

  settingsTitle.innerText = "Connected Services";
});
