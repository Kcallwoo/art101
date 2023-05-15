// index.js - Javascript for the Web
// Author: Kamryn Callwood & Faith Smith
// Date: 11 May 2023


var outputE1 = document.getElementById("output");

var new1E1 = document.createElement("h1");
new1E1.innerHTML = "ART-101";

outputE1.insertBefore(new1E1, outputE1.firstChild);

var new2E1 = document.createElement("h2");
var new3E1 = document.createElement("p");

new2E1.innerHTML = "Moral of the story:";
new3E1.innerHTML = "This lab was hard";

outputE1.appendChild(new2E1);
outputE1.appendChild(new3E1);

new1E1.style.color = "blue";
new1E1.style.fontWeight = "bold";

new2E1.style.color = "blue";
new2E1.style.fontWeight = "bold";
new2E1.style.marginLeft = "15px";

new3E1.style.marginLeft = "15px";
new3E1.style.textDecoration = "underline";
new3E1.style.fontWeight = "bold";

var body1 = document.getElementsByClassName("minor-section");
for (var i = 0; i < body1.length; i++) {
  body1[i].style.color = "red";
}