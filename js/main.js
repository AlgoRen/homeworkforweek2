// Quickly declaring variables to the elements on page I needed to grab.
var body = $("body")
var main = $("main")
var footer = $("#footer")
var campfire = $("#campfire")
var comicStrip = $("#comicStrip")

/* Setting up API call for campfire gif */
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=a4rgsp8IvrOZPoatgW1PG4MWsZ10Saur&q=campfire&limit=25&offset=0&rating=PG-13&lang=en";
$(document).ready(function(){
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
    var img = $("<img>");
    console.log(response)
    img.attr("src", response.data[0].images.original.url)
    $(campfire).append(img);
    });
});
/* Bootstrap Modal Code */
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

/* Creating an add portfolio item section*/
var portfolioArr = ["One", "Two", "Three", "Four"] //Using array to cycle through and
// create new divs with specific id tags.

var portfolioDiv = $("<div>").attr("class", "col-first portfolio").text("Yeah! 1");
var portfolioAddDiv = $("<div>").attr("class", "col-6 portfolio").text("Added Div");
$("#portfolioContainer").children("section#portRowOne").prepend(portfolioDiv);
$("#addPortProj").on("click", function(){
  $("#portfolioContainer").children("section#portRowOne").prepend(portfolioAddDiv)
})


