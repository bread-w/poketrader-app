$(document).ready(function () {
  $(document).on("click", "input.pokemonCards", updateCard);
  console.log("I've been clicked");

  function updateCard(event) {
    event.preventDefault();
    const id = $(this).data("id");
    const newFavorite = $(this).data(1);
    var newFavoriteCard = {
      favorite: newFavorite,
    };
    $.ajax({
      type: "PUT",
      data: newFavoriteCard,
      url: "/api/userscards/" + id,
    }).then(function (response) {
      console.log(response);
      // Reload the page to get the updated list
    });
  }
});
