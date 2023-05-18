// index.js - JavaScript Events and Forms
// Author: Kamryn Callwood & Kelsey Melott
// Date: 16 May 2023

function sortUserName(name) {
  // Retrieve name
  var userName = name
  console.log("userName = ", userName);
  // split the string into an array
  var nameArray = userName.split('');
  // sort the array in alphabetical order, case-insensitive
  var nameArraySort = nameArray.sort(function(a, b) {
    var nameA = a.toLowerCase();
    var nameB = b.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  console.log("nameArraySort =", nameArraySort);
  // change the array back into a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

function anagram(str) {
  // split the string into an array
  var strArray = str.split('');
  // shuffle the array
  for (var i = strArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = strArray[i];
    strArray[i] = strArray[j];
    strArray[j] = temp;
  }
  // join the array back into a string
  var strShuffled = strArray.join('');
  console.log("strShuffled =", strShuffled);
  return strShuffled;
}

var button = document.getElementById('my-button');

button.addEventListener('click', function() {
  var inputValue = document.getElementById('user-name').value;
  const outputDiv = document.getElementById('output');
  //console.log("You input:", inputValue);

  
  var sorted = sortUserName(inputValue);
  var shuffled = anagram(inputValue);
  outputDiv.innerHTML = "Sorted: " + sorted + "<br>Shuffled: " + shuffled;
  outputDiv.innerHTML = sorted;
});


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}