// index.js - Lab 11 - Library & Jquery
// Author: Kamryn Callwood & Bruce Bai
// Date: 18 May 2023

function create_buttons() {
  var sectOne = $("#one");
  var sectTwo = $("#two");
  var sectThree = $("#three");

  var buttonOne = $("<button>").text("Click Me");
  var buttonTwo = $("<button>").text("Click Me");
  var buttonThree = $("<button>").text("Click Me");
  var buttonFour = $("<button>").text("Change Color");

  sectOne.find("h2").after(buttonOne);
  sectTwo.find("h2").after(buttonTwo);
  sectThree.find("h2").after(buttonThree);
  sectThree.find("h2").after(buttonFour);

  var outputOne = sectOne.find("#output");
  var outputTwo = sectTwo.find("#output");
  var outputThree = sectThree.find("#output");

  outputOne.hide();
  outputTwo.hide();
  outputThree.hide();

  buttonOne.click(function() {
    outputOne.toggle(); // Toggle the visibility of paragraph tags in section one
  });

  buttonTwo.click(function() {
    outputTwo.toggle(); // Toggle the visibility of paragraph tags in section two
  });

  buttonThree.click(function() {
    outputThree.toggle(); // Toggle the visibility of paragraph tags in section three
  });

  buttonFour.click(function() {
    buttonOne.toggleClass("color-change"); // Toggle the "color-change" class on buttonOne
    buttonTwo.toggleClass("color-change"); // Toggle the "color-change" class on buttonTwo
    buttonThree.toggleClass("color-change"); // Toggle the "color-change" class on buttonThree
  });
}

function main() {
  console.log("Main function started.");
  $(document).ready(create_buttons);
}

main();




