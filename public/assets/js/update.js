
$(document).on("click", "input.pokemonCards", deleteCard);

function deleteCard(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log("I've been clicked");
  var id = $(this).attr("id");
  console.log(id);
  $.ajax({
    method: "DELETE",
    url: "/api/usercards/" + id,
  }).then(function (response) {
    console.log(response);
    deletedCard();
  });
}

$(".showFavorites").on("click", function (event) {
  event.preventDefault();
  $(".false").attr("style", "display: none");
});

$(".showAll").on("click", function (event) {
  event.preventDefault();
  $(".false").attr("style", "display: inline-block");
});

function deletedCard() {
  console.log("Called deleted card function")
  $("#alert").attr("style", "display: inline-block");
  setTimeout(hideCard, 1500);
}

function hideCard() {
  window.location.replace("/update");
}

