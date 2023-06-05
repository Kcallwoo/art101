// Kamryn Callwood
// Lab 16 - JSON and APIs

var comicNumber = 0;

function getData(number) {
  $.ajax({
    url: `https://xkcd.com/${number}/info.0.json`,
    type: "GET",
    dataType: "json",
    success: function (data) {
      $("#comic").html("<h2>" + data.title + "</h2>");
      $("#comic").append("<img src='" + data.img + "' alt='" + data.alt + "' title='" + data.alt + "'>");
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Error", textStatus, errorThrown);
    }
  });
}

$(document).ready(function () {
  getData(comicNumber);

  $("#next").click(function () {
    comicNumber++;
    getData(comicNumber);
  });

  $("#previous").click(function () {
    omicNumber--;
    getData(comicNumber);
  });
});
