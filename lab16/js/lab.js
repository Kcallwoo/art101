// Kamryn Callwood
// Lab 16 - JSON and APIs

// Using the core $.ajax() method
$.ajax({
  // The URL for the request (from the XKCD API docs)
  url: "https://xkcd.com/info.0.json",
  // Whether this is a POST or GET request
  type: "GET",
  // The type of data we expect back
  dataType: "json",
  // What do we do when the API call is successful
  // all the action goes in here
  success: function (comicObj) {
    // Process the parts and add them to your webpage
    var title = comicObj.title; // Get the comic title
    var imgSrc = comicObj.img; // Get the image URL
    var altText = comicObj.alt; // Get the alt text

    // Add the title to the webpage
    $("body").append("<h2>" + title + "</h2>");

    // Create an image tag with the appropriate attributes
    var imgTag = $("<img>").attr("src", imgSrc).attr("alt", altText).attr("title", altText);

    // Add the image tag to the webpage
    $("body").append(imgTag);
  },
  // What we do if the API call fails
  error: function (jqXHR, textStatus, errorThrown) {
    // Handle the error
    console.log("Error:", textStatus, errorThrown);
  },
});
