// index.js - Array and Variables: Purpose is to create an array that contains modes of transportation and an object that contains information about a car. 
// Author: Kamryn Callwood
// Date: 2 May 2023

// Define Variables
var myTransport = ["walking", "car", "bus", "bike"];

// Create an object for my main ride

// Functionsvar 
var myMainRide = {
    make: "Lamborghini",
    model: "Urus",
    color: "Red",
    year: "2017",
    age: function() {
        return 2023 - this.year;
    }
  }

// Output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
