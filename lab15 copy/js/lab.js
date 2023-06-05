// Kamryn Callwood
// Lab 15 - AJAX

function fetchAPODData(apiKey) {
  $.ajax({
    url: 'https://api.nasa.gov/planetary/apod',
    method: 'GET',
    data: {
      api_key: apiKey
    },
    success: function(response) {
      // The 'response' variable contains the API response
      console.log(response);

      // Access specific data fields
      var title = response.title;
      var explanation = response.explanation;
      var imageUrl = response.url;

      // Do something with the data
      // For example, display the APOD title, explanation, and image
      $('#title').text(title);
      $('#explanation').text(explanation);
      $('#image').attr('src', imageUrl);
    },
    error: function() {
      console.log('Error occurred while retrieving data from the NASA APOD API.');
    }
  });
}

$(document).ready(function() {
  // Use event delegation to attach the click event listener to the body element
  $('body').on('click', '#active', function() {
    var apiKey = '1D54V9VfcB2r43Nwp8jLNh0wmj1kuxHFechdgj82';
    fetchAPODData(apiKey);
  });
});


