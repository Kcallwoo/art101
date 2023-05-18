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

  sectOne.find("h2").after(buttonOne);
  sectTwo.find("h2").after(buttonTwo);
  sectThree.find("h2").after(buttonThree);

  buttonOne.click(function() {
    sectOne.find(".special").toggle(); // Toggle the visibility of paragraph tags in section one
  });

  buttonTwo.click(function() {
    sectTwo.find(".special").toggle(); // Toggle the visibility of paragraph tags in section two
  });

  buttonThree.click(function() {
    sectThree.find(".special").toggle(); // Toggle the visibility of paragraph tags in section three
  });
}

function main() {
  console.log("Main function started.");
  $(document).ready(create_buttons);
}

main();



