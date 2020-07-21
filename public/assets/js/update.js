$(document).on("click", "button.delete", deleteCard);

function deleteCard(event) {
  event.stopPropagation();
  console.log("I've been clicked");
  var id = $(this).data("id");
  console.log(id);
  $.ajax({
    method: "DELETE",
    url: "/api/usercards/" + id,
  }).then(function (response) {
    console.log(response);
    window.location.replace("/update");
    deletedCard();
  });
}

function deletedCard() {
  $("#alert").attr("style", "display: inline-block");
  setTimeout(hideCard, 1500);
}

function hideCard() {
  $("#alert").attr("style", "display: none");
}
