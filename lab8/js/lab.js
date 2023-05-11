// index.js - Anon Functions and Callbacks 
// Author: Kamryn Callwood & Eri Foulds
// Date: 9 May 2023

// Create a function that returns true or false if inpitted number is odd
function isOdd(x) {
  return (x % 2 == 1);
}

// test function with example numbers
console.log("Is odd? ", isOdd(1));
console.log("Is odd? ", isOdd(2));

// set an array of random numbers
array = [7, 39, 47, 62, 109, 353, 42, 803, 9088]
console.log("My Array: ", array);

// test array with the isOdd function 
var result = array.map(isOdd);
console.log("Test of oddness of array:", result);

// calculate array numbers to the third exponent 
var result = array.map(function(x){
  return x ** 3;
})
console.log("Array to the third power:", result);

// Create a function that joings two separate strings into one string
function joinStrings(str1, str2) {
  return str1 + " " + str2;
}

// test
console.log(joinStrings("hello", "world"));

// Create an array of strings to apply function to 
var array = [["hello", "world"], ["kamryn", "callwood"], ["Eri", "Foulds"]];
console.log(array);

// apply joinStrings() to each pair of strings in the array
var results = array.map(pair => joinStrings(pair[0], pair[1]));
console.log(results);

// let's get this party started
main();
