// index.js - Functions
// Author: Kamryn Callwood and Faith Smith 
// Date: 4 May 2023

function sortUserName() {
  // Retrieve name
  var userName = window.prompt("Hi. Please tell me your name so I can help you fix it.");
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

//output 
document.writeln("Hey, I fixed your name: ",
  sortUserName(), "</br>");

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
