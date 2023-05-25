// Kamryn Callwood
// Lab 13 - Loops

$(document).ready(function() {
   // Function to perform FizzBuzz
  function fizzBuzzBoom() {
    $("#output").empty(); // Clear previous output
    var max = parseInt($("#max").val());

    for (var i = 1; i <= max; i++) {
      var str = "";

      if (i % 3 == 0) {
        str += "Fizz";
      }
      if (i % 5 == 0) {
        str += "Buzz";
      }
      if (i % 7 == 0) {
        str += "Boom";
      }
      if (str == "") {
        str = i;
      }
      $("#output").append("<div>" + str + "!</div>");
    }
  }

  $("#submit").click(function() {
    fizzBuzzBoom();
    console.log("Submit button clicked!");
  });
});
