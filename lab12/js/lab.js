// index.js - Lab 12 - Conditionals
// Author: Kamryn Callwood 
// Date: 23 May 2023

function sortingHat(str) {
  var len = str.length;
  var mod = len % 4;
  if (mod == 0) {
    return "Gryffindor";
  }
  else if (mod == 1) {
    return "Ravenclaw";
  }
  else if (mod == 2) {
    return "Slytherin";
  }
  else if (mod == 3) {
    return "Hufflepuff";
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  var newText = "<p>The Sorting Hat has sorted you into " + house + ".</p>";
  document.getElementById("output").innerHTML = newText;
});
