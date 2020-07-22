$(document).ready(function () {
  $(document).on("click", "input.pokemonCards", updateCard);
  console.log("I've been clicked");

  function updateCard(event) {
    event.preventDefault();
    const id = $(this).attr("id");
    console.log(id);
    const newFavoriteCard = {
      id: id,
      favorite: 1,
    };
    $.ajax({
      type: "PUT",
      data: newFavoriteCard,
      url: "/api/userscards/" + id,
    }).then(function (response) {
      console.log(response);
      addedFavorite();
      // Reload the page to get the updated list
    });
  }
});

$(".showFavorites").on("click", function (event) {
  event.preventDefault();
  $(".false").attr("style", "display: none");
});

$(".showAll").on("click", function (event) {
  event.preventDefault();
  $(".false").attr("style", "display: inline-block");
});

function addedFavorite() {
  $("#alert").attr("style", "display: inline-block");
  setTimeout(hideCard, 1500);
}

function hideCard() {
  window.location.replace("/collection");
}
