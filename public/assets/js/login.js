$(document).ready(function () {
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  loginForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (!userData.email || !userData.password) {
      return;
    }
    console.log(userData);
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  function loginUser(email, password) {
    $.post("/api/auth", {
      email: email,
      password: password,
    })
      .then(function (response) {
        console.log(response);
        window.location.replace("/collection");
      })
      .catch(function (err) {
        console.log(err);
        failedLogin();
      });
  }
});

function failedLogin() {
  $("#alert").attr("style", "display: inline-block");
  setTimeout(hideCard, 3000);
}

function hideCard() {
  window.location.replace("/");
}
